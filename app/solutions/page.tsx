import { CapabilityCard } from "@/components/CapabilityCard";

export default function SolutionsByRole() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
        Solutions by Role
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Helioriq supports a wide range of enterprise stakeholders—each with distinct
        goals and outcomes.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <CapabilityCard
          title="CIO"
          description="Gain operational visibility across business-critical cloud services and ensure resilience at scale."
        />
        <CapabilityCard
          title="CISO"
          description="Identify misconfigurations and identity risks before they escalate into security incidents."
        />
        <CapabilityCard
          title="Cloud Ops / SRE"
          description="Proactively detect reliability and backup gaps to prevent downtime and data loss."
        />
        <CapabilityCard
          title="Risk & Compliance"
          description="Maintain audit-ready evidence of backup coverage and security posture."
        />
      </div>
    </div>
  );
}
