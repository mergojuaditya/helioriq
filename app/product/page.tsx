import { Shield, Database, Activity } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CTASection } from "@/components/CTASection";

export default function ProductOverview() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
        The Helioriq Platform
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Helioriq provides a unified view of cloud reliability, security, and backup
        readiness — helping enterprise teams prevent incidents and ensure resilience.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <CapabilityCard
          icon={<Activity size={28} />}
          title="Reliability"
          description="Gain visibility into dependencies, resilience scoring, and uptime readiness."
        />
        <CapabilityCard
          icon={<Shield size={28} />}
          title="Security"
          description="Identify misconfigurations and access risks with prioritized insights."
        />
        <CapabilityCard
          icon={<Database size={28} />}
          title="Backup & Recovery"
          description="Track backup coverage, retention, and restore readiness with confidence."
        />
      </div>

      <CTASection
        heading="See Helioriq in action"
        subtext="Experience how our dashboards help you detect risks early and maintain operational confidence."
        buttonText="Request a Demo"
        buttonLink="/request-demo"
      />
    </div>
  );
}
