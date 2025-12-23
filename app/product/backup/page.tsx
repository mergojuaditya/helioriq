import { Database } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

export default function BackupPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
        Backup & Recovery
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Ensure critical data is protected and recoverable through continuous verification of
        backup coverage, retention, and RTO/RPO alignment.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <CapabilityCard
          icon={<Database size={26} />}
          title="Coverage Tracking"
          description="Monitor backup policies across accounts and ensure complete asset protection."
        />
        <CapabilityCard
          icon={<Database size={26} />}
          title="Retention Validation"
          description="Verify that retention rules meet regulatory and business recovery requirements."
        />
        <CapabilityCard
          icon={<Database size={26} />}
          title="Restore Readiness"
          description="Simulate restores and validate RTO/RPO compliance with real data."
        />
      </div>
    </div>
  );
}
