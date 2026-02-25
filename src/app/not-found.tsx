import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="pt-20">
      <Section bg="sand" className="min-h-[60vh] flex items-center">
        <div className="text-center max-w-md mx-auto">
          <p className="font-handwritten text-6xl text-teal-deep mb-4">404</p>
          <h1 className="font-display text-3xl font-bold text-dark mb-3">
            Page Not Found
          </h1>
          <p className="text-text-muted mb-8 leading-relaxed">
            Looks like this wave has already passed. Let&apos;s get you back to shore.
          </p>
          <Button href="/" variant="primary">
            Back to Homepage
          </Button>
        </div>
      </Section>
    </div>
  );
}
