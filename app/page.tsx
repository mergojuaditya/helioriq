import { Shield, Database, Activity } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-semibold text-gray-900 mb-6">
          Cloud reliability you can trust
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
          Helioriq continuously analyzes your cloud environment to detect
          reliability, security, and backup risks before they impact your
          business.
        </p>
        <a
          href="/request-demo"
          className="inline-block bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-dark transition"
        >
          Request a Demo
        </a>
      </section>

      {/* Trust bar */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">
            Trusted by forward-thinking cloud teams
          </p>
          <div className="flex justify-center items-center gap-8 text-gray-400">
            <div className="h-2 w-2 bg-gray-300 rounded-full" />
            <div className="h-2 w-2 bg-gray-300 rounded-full" />
            <div className="h-2 w-2 bg-gray-300 rounded-full" />
            <div className="h-2 w-2 bg-gray-300 rounded-full" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
          How Helioriq Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <CapabilityCard
            icon={<Activity size={28} />}
            title="Discover"
            description="Identify critical systems, dependencies, and misconfigurations across cloud accounts."
          />
          <CapabilityCard
            icon={<Shield size={28} />}
            title="Analyze"
            description="Evaluate resilience, security posture, and backup readiness using AI-driven models."
          />
          <CapabilityCard
            icon={<Database size={28} />}
            title="Act"
            description="Receive clear, prioritized recommendations to prevent outages and data loss."
          />
        </div>
      </section>

      {/* Final CTA */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <CTASection
          heading="Ready to strengthen your cloud?"
          subtext="See how Helioriq helps enterprise teams gain confidence in reliability, security, and backup readiness."
          buttonText="Request a Demo"
          buttonLink="/request-demo"
        />
      </div>
    </>
  );
}
