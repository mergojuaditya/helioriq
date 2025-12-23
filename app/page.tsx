import { MotionScrollReveal } from "@/components/MotionScrollReveal";
import { Shield, Database, Activity } from "lucide-react";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900">
      {/* ================================
          HERO SECTION
      ================================== */}
      <section className="relative bg-gradient-to-b from-white to-brand-light/20 py-32 text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-light/60 via-transparent to-transparent opacity-30" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <MotionScrollReveal direction="up">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-dark leading-tight mb-6">
              AI-driven Cloud Reliability Intelligence
            </h1>
          </MotionScrollReveal>

          <MotionScrollReveal delay={0.2} direction="up">
            <p className="text-lg text-gray-700 mb-10">
              Improve your cloud resilience and security posture with predictive analytics that
              identify risks before they impact your business.
            </p>
          </MotionScrollReveal>

          <MotionScrollReveal delay={0.4} direction="up">
            <div className="flex justify-center gap-4">
              <a
                href="/request-demo"
                className="bg-brand text-white px-8 py-3 rounded-md font-medium hover:bg-brand-dark transition-colors"
              >
                Request Demo
              </a>
              <a
                href="/product"
                className="border border-brand text-brand px-8 py-3 rounded-md font-medium hover:bg-brand-light transition-colors"
              >
                Learn More
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              No installation required — get insights in minutes.
            </p>
          </MotionScrollReveal>
        </div>
      </section>

      {/* ================================
          TRUST BAR
      ================================== */}
      <MotionScrollReveal direction="up">
        <section className="bg-gray-50 py-12 border-t border-gray-100">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-sm uppercase tracking-wide text-gray-500 mb-6">
              Trusted by forward-thinking cloud teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-10 text-gray-400">
              <div className="h-3 w-3 bg-gray-300 rounded-full" />
              <div className="h-3 w-3 bg-gray-300 rounded-full" />
              <div className="h-3 w-3 bg-gray-300 rounded-full" />
              <div className="h-3 w-3 bg-gray-300 rounded-full" />
            </div>
          </div>
        </section>
      </MotionScrollReveal>

      {/* ================================
          FEATURES / CAPABILITIES
      ================================== */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <MotionScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark text-center mb-16">
            Why Teams Choose Helioriq
          </h2>
        </MotionScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <MotionScrollReveal direction="left">
            <div className="bg-white shadow-soft rounded-xl p-8 text-center hover:-translate-y-1 hover:shadow-md transition-all">
              <Activity className="h-10 w-10 text-brand mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Proactive Reliability</h3>
              <p className="text-gray-600">
                Anticipate and mitigate outages before they affect users.
              </p>
            </div>
          </MotionScrollReveal>

          <MotionScrollReveal delay={0.2} direction="up">
            <div className="bg-white shadow-soft rounded-xl p-8 text-center hover:-translate-y-1 hover:shadow-md transition-all">
              <Shield className="h-10 w-10 text-brand mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Automated Security Analysis</h3>
              <p className="text-gray-600">
                AI-driven analytics continuously evaluate reliability and security posture.
              </p>
            </div>
          </MotionScrollReveal>

          <MotionScrollReveal delay={0.4} direction="right">
            <div className="bg-white shadow-soft rounded-xl p-8 text-center hover:-translate-y-1 hover:shadow-md transition-all">
              <Database className="h-10 w-10 text-brand mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Actionable Insights</h3>
              <p className="text-gray-600">
                Receive clear, prioritized recommendations tailored to your environment.
              </p>
            </div>
          </MotionScrollReveal>
        </div>
      </section>

      {/* ================================
          HOW IT WORKS
      ================================== */}
      <section className="bg-brand-light/40 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <MotionScrollReveal direction="up">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-dark text-center mb-12">
              How Helioriq Works
            </h2>
          </MotionScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <MotionScrollReveal direction="up">
              <div className="p-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-brand-light flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-2xl">1</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Connect</h3>
                <p className="text-gray-600">
                  Securely connect your cloud environments with read-only access.
                </p>
              </div>
            </MotionScrollReveal>

            <MotionScrollReveal delay={0.2} direction="up">
              <div className="p-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-brand-light flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-2xl">2</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Analyze</h3>
                <p className="text-gray-600">
                  Helioriq’s AI engine evaluates reliability, security, and backup readiness.
                </p>
              </div>
            </MotionScrollReveal>

            <MotionScrollReveal delay={0.4} direction="up">
              <div className="p-6">
                <div className="h-20 w-20 mx-auto rounded-full bg-brand-light flex items-center justify-center mb-4">
                  <span className="text-brand-dark font-bold text-2xl">3</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Act</h3>
                <p className="text-gray-600">
                  Get prioritized actions and reports to strengthen your environment proactively.
                </p>
              </div>
            </MotionScrollReveal>
          </div>
        </div>
      </section>

      {/* ================================
          FINAL CTA
      ================================== */}
      <MotionScrollReveal direction="up" delay={0.3}>
        <div className="max-w-5xl mx-auto px-6 py-24">
          <CTASection
            heading="Ready to strengthen your cloud?"
            subtext="See how Helioriq helps enterprise teams gain confidence in reliability, security, and backup readiness."
            buttonText="Request a Demo"
            buttonLink="/request-demo"
          />
        </div>
      </MotionScrollReveal>
    </div>
  );
}
