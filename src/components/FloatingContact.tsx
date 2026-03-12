import { useState } from "react";
import { MessageCircle, X, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const FloatingContact = () => {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        inquiry_type: "Quick contact form",
        message: form.message,
      });
      if (error) throw error;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setOpen(false);
        setForm({ name: "", email: "", phone: "", message: "" });
      }, 3000);
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Widget */}
      <div className="fixed bottom-5 right-5 z-50">
        {open && (
          <div className="mb-3 w-80 bg-background border border-border rounded-xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
            {/* Header */}
            <div className="bg-navy px-4 py-3 flex items-center justify-between">
              <span className="text-primary-foreground font-semibold text-sm">
                Get In Touch
              </span>
              <button
                onClick={() => setOpen(false)}
                className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitted ? (
              <div className="p-6 text-center">
                <CheckCircle className="w-10 h-10 text-gold mx-auto mb-3" />
                <p className="font-semibold text-sm">Message sent!</p>
                <p className="text-xs text-muted-foreground mt-1">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-4 space-y-3">
                <input
                  required
                  type="text"
                  placeholder="Your name *"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="email"
                  placeholder="Email *"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="tel"
                  placeholder="Phone (optional)"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <textarea
                  required
                  rows={3}
                  placeholder="How can we help? *"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-md border border-input bg-background text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <Button
                  variant="gold"
                  size="sm"
                  type="submit"
                  disabled={loading}
                  className="w-full"
                >
                  {loading ? "Sending..." : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        )}

        {/* Floating Button */}
        <button
          onClick={() => setOpen(!open)}
          className="w-14 h-14 rounded-full bg-gold text-gold-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
          aria-label={open ? "Close contact form" : "Open contact form"}
        >
          {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>
    </>
  );
};

export default FloatingContact;
