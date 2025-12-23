import { CapabilityCard } from "@/components/CapabilityCard";

export default function IndustriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
        Solutions by Industry
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Different industries face unique reliability and compliance challenges.
        Helioriq adapts its intelligence to your sector’s needs.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <CapabilityCard
          title="Healthcare"
          description="Protect sensitive patient data with reliable backups and proactive security posture monitoring."
        />
        <CapabilityCard
          title="Finance"
          description="Ensure uptime and data integrity across critical transaction systems and regulatory environments."
        />
        <CapabilityCard
          title="SaaS"
          description="Prevent outages, maintain trust, and meet customer SLAs with automated reliability scoring."
        />
        <CapabilityCard
          title="Public Sector"
          description="Enhance service availability and compliance while maintaining strict data-handling controls."
        />
      </div>
    </div>
  );
}
