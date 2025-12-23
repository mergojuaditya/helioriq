import { Shield } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

export default function SecurityPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
        Security Insights
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Detect misconfigurations, identity exposures, and compliance posture gaps — prioritized
        by impact and remediation effort.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <CapabilityCard
          icon={<Shield size={26} />}
          title="Configuration Risk"
          description="Spot and rank risky settings across IAM, storage, and networking layers."
        />
        <CapabilityCard
          icon={<Shield size={26} />}
          title="Access Exposure"
          description="Detect over-privileged roles and unused credentials before they’re exploited."
        />
        <CapabilityCard
          icon={<Shield size={26} />}
          title="Posture Analysis"
          description="Benchmark your security stance against best practices and compliance standards."
        />
      </div>
    </div>
  );
}
