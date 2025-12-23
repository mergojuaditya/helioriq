import { Workflow, Shield, Database, Activity } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CTASection } from "@/components/CTASection";

export default function HowItWorks() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
        How Helioriq Works
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Helioriq connects to your cloud environment in read-only mode to analyze
        operational, security, and backup data. Our AI models surface actionable
        intelligence without disrupting live workloads.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <CapabilityCard
          icon={<Activity size={26} />}
          title="Collect Signals"
          description="We securely collect metadata and configuration data from your cloud accounts using read-only APIs."
        />
        <CapabilityCard
          icon={<Shield size={26} />}
          title="Analyze Risks"
          description="Helioriq’s engine evaluates dependencies, resilience gaps, and exposure levels to produce prioritized insights."
        />
        <CapabilityCard
          icon={<Database size={26} />}
          title="Recommend Actions"
          description="You receive clear, actionable recommendations to strengthen reliability and security posture."
        />
      </div>

      <CTASection
        heading="See it in action"
        subtext="Learn how Helioriq turns raw cloud data into clear, actionable intelligence."
        buttonText="Request a Demo"
        buttonLink="/request-demo"
      />
    </div>
  );
}
