import { MotionScrollReveal } from "@/components/MotionScrollReveal";
import { MotionFadeIn } from "@/components/MotionFadeIn";
import { Shield, Database, Activity } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <MotionScrollReveal>
  <h1>Cloud reliability you can trust</h1>
</MotionScrollReveal>

        <MotionFadeIn delay={0.2}>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg mb-10">
            Helioriq continuously analyzes your cloud environment to detect
            reliability, security, and backup risks before they impact your
            business.
          </p>
        </MotionFadeIn>

        <MotionFadeIn delay={0.4}>
          <a
            href="/request-demo"
            className="inline-block bg-brand text-white px-6 py-3 rounded-md hover:bg-brand-dark transition-colors"
          >
            Request a Demo
          </a>
        </MotionFadeIn>
      </section>

      {/* Trust bar */}
      <MotionFadeIn delay={0.6}>
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
      </MotionFadeIn>

      {/* How it works */}
      <MotionFadeIn delay={0.8}>
        <section className="max-w-6xl mx-auto px-6 py-24">
          <h2 className="text-3xl font-semibold text-gray-900 text-center mb-12">
            How Helioriq Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <CapabilityCard
              icon={<Activity className="h-6 w-6 text-brand" />}
              title="Discover"
              description="Identify critical systems, dependencies, and configuration risks within your cloud."
            />
            <CapabilityCard
              icon={<Shield className="h-6 w-6 text-brand" />}
              title="Analyze"
              description="Assess reliability and security posture through AI-driven insights and scoring."
            />
            <CapabilityCard
              icon={<Database className="h-6 w-6 text-brand" />}
              title="Act"
              description="Get prioritized recommendations to strengthen resilience and prevent outages."
            />
          </div>
        </section>
      </MotionFadeIn>

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
