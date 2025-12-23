import { Activity } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";

export default function ReliabilityPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6 text-center">
        Reliability Intelligence
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
        Understand and improve your cloud’s reliability posture through dependency visibility,
        resilience scoring, and outage prevention analytics.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        <CapabilityCard
          icon={<Activity size={26} />}
          title="Resilience Scoring"
          description="Quantify your environment’s fault tolerance and identify weak links."
        />
        <CapabilityCard
          icon={<Activity size={26} />}
          title="Dependency Visibility"
          description="Map service interconnections to understand failure propagation risks."
        />
        <CapabilityCard
          icon={<Activity size={26} />}
          title="Uptime Readiness"
          description="Ensure key systems meet availability targets through continuous checks."
        />
      </div>
    </div>
  );
}
