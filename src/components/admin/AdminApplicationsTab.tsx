import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle2, XCircle, Mail, ChevronDown, ChevronUp, Clock } from "lucide-react";

type Application = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  business_name: string | null;
  business_state: string | null;
  states_served: string[];
  specialties: string[];
  certifications: string[];
  cert_other: string | null;
  years_experience: number;
  practice_description: string;
  tier_interest: string;
  website_url: string | null;
  hear_about: string | null;
  offers_hourly_coaching: boolean;
  offers_case_management: boolean;
  no_referral_fees: boolean;
  coupon_code: string | null;
  status: string;
  reviewed_at: string | null;
  welcome_email_sent_at: string | null;
  created_at: string;
};

const AdminApplicationsTab = () => {
  const { toast } = useToast();
  const qc = useQueryClient();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);

  const { data: apps = [], isLoading } = useQuery({
    queryKey: ["membership-applications"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("membership_applications")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Application[];
    },
  });

  const refresh = () => qc.invalidateQueries({ queryKey: ["membership-applications"] });

  const approve = async (app: Application) => {
    if (!confirm(`Approve ${app.full_name} and send welcome email to ${app.email}?`)) return;
    setBusyId(app.id);
    try {
      const { data, error } = await supabase.functions.invoke("send-welcome-email", {
        body: { applicationId: app.id },
      });
      if (error || (data as any)?.error) throw new Error((data as any)?.error || error?.message);
      toast({ title: "Approved", description: `Welcome email sent to ${app.email}.` });
      refresh();
    } catch (err) {
      toast({
        title: "Failed to approve",
        description: err instanceof Error ? err.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setBusyId(null);
    }
  };

  const reject = async (app: Application) => {
    if (!confirm(`Mark ${app.full_name}'s application as rejected? (No email is sent.)`)) return;
    setBusyId(app.id);
    const { error } = await supabase
      .from("membership_applications")
      .update({ status: "rejected", reviewed_at: new Date().toISOString() })
      .eq("id", app.id);
    setBusyId(null);
    if (error) {
      toast({ title: "Failed", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Marked as rejected" });
    refresh();
  };

  const resendWelcome = async (app: Application) => {
    if (!confirm(`Resend welcome email to ${app.email}?`)) return;
    setBusyId(app.id);
    try {
      const { data, error } = await supabase.functions.invoke("send-welcome-email", {
        body: { applicationId: app.id },
      });
      if (error || (data as any)?.error) throw new Error((data as any)?.error || error?.message);
      toast({ title: "Welcome email resent", description: `Sent to ${app.email}.` });
      refresh();
    } catch (err) {
      toast({
        title: "Failed to resend",
        description: err instanceof Error ? err.message : "Unknown error",
        variant: "destructive",
      });
    } finally {
      setBusyId(null);
    }
  };

  if (isLoading) return <p className="text-muted-foreground">Loading applications...</p>;
  if (apps.length === 0) return <p className="text-muted-foreground">No applications yet.</p>;

  const statusBadge = (status: string) => {
    if (status === "approved") return <Badge className="bg-emerald-600 hover:bg-emerald-600">Approved</Badge>;
    if (status === "rejected") return <Badge variant="destructive">Rejected</Badge>;
    return <Badge variant="secondary"><Clock className="w-3 h-3 mr-1" />Pending</Badge>;
  };

  return (
    <div className="space-y-3">
      {apps.map((app) => {
        const isOpen = expanded === app.id;
        const isBusy = busyId === app.id;
        return (
          <div key={app.id} className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="p-4 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold">{app.full_name}</h3>
                  {statusBadge(app.status)}
                  {app.coupon_code && (
                    <Badge variant="outline" className="text-xs">Coupon: {app.coupon_code}</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
                  {app.email} · {app.phone} · {app.business_state || "—"} ·{" "}
                  {new Date(app.created_at).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <Button size="sm" variant="ghost" onClick={() => setExpanded(isOpen ? null : app.id)}>
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {isOpen ? "Hide" : "Details"}
                </Button>
                {app.status === "pending" && (
                  <>
                    <Button size="sm" variant="outline" onClick={() => reject(app)} disabled={isBusy}>
                      <XCircle className="w-4 h-4 mr-1" /> Reject
                    </Button>
                    <Button size="sm" variant="gold" onClick={() => approve(app)} disabled={isBusy}>
                      <CheckCircle2 className="w-4 h-4 mr-1" />
                      {isBusy ? "Sending..." : "Approve & send welcome"}
                    </Button>
                  </>
                )}
                {app.status === "approved" && (
                  <Button size="sm" variant="outline" onClick={() => resendWelcome(app)} disabled={isBusy}>
                    <Mail className="w-4 h-4 mr-1" />
                    {isBusy ? "Sending..." : "Resend welcome"}
                  </Button>
                )}
              </div>
            </div>
            {isOpen && (
              <div className="border-t border-border bg-warm-gray/40 p-4 grid md:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                <Detail label="Business" value={app.business_name || "—"} />
                <Detail label="Website" value={app.website_url || "—"} />
                <Detail label="Years of experience" value={String(app.years_experience)} />
                <Detail label="Tier" value={app.tier_interest} />
                <Detail label="Business state" value={app.business_state || "—"} />
                <Detail label="States served" value={app.states_served.join(", ") || "—"} />
                <Detail label="Specialties" value={app.specialties.join(", ") || "—"} />
                <Detail
                  label="Certifications"
                  value={[...app.certifications, app.cert_other].filter(Boolean).join(", ") || "—"}
                />
                <Detail label="Offers hourly coaching" value={app.offers_hourly_coaching ? "Yes" : "No"} />
                <Detail label="Offers post-treatment case management" value={app.offers_case_management ? "Yes" : "No"} />
                <Detail label="Agreed: no referral fees" value={app.no_referral_fees ? "Yes" : "No"} />
                <Detail label="How they heard" value={app.hear_about || "—"} />
                <Detail
                  label="Welcome email sent"
                  value={app.welcome_email_sent_at ? new Date(app.welcome_email_sent_at).toLocaleString() : "—"}
                />
                <div className="md:col-span-2">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    Practice description
                  </p>
                  <p className="whitespace-pre-wrap">{app.practice_description}</p>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => (
  <div>
    <p className="text-xs uppercase tracking-wide text-muted-foreground">{label}</p>
    <p>{value}</p>
  </div>
);

export default AdminApplicationsTab;