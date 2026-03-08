import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const PaymentConfirmation = () => {
  return (
    <>
      <SEO title="Payment Complete" description="Your membership payment has been received." />
      <div className="container mx-auto px-4 py-24 text-center max-w-lg">
        <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
        <h1 className="text-3xl font-bold mb-4">Payment Received!</h1>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Thank you for your application and payment. Our team will review your application and contact you within 5 business days to complete the onboarding process.
        </p>
        <Button variant="gold" asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </>
  );
};

export default PaymentConfirmation;
