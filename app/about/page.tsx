import { CTASection } from "@/components/CTASection";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        About Helioriq
      </h1>

      <section className="space-y-8 text-gray-700 leading-relaxed">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Mission</h2>
          <p>
            To help organizations build confidence in their cloud environments by improving
            reliability, security, and backup readiness through actionable intelligence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Why We Exist</h2>
          <p>
            Cloud technology was created to make businesses stronger and more agile—but for many
            organizations, it has become a source of uncertainty. Outages, security incidents, and
            data loss often appear without warning. We exist because reliability should not be
            reactive. Helioriq brings clarity to complexity so teams can identify what matters,
            detect risk early, and act with confidence.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Values</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Trust first:</strong> Every insight we deliver must be reliable and verifiable.</li>
            <li><strong>Clarity over noise:</strong> Data is only useful when it drives confident action.</li>
            <li><strong>Security by design:</strong> Read-only analysis and privacy-first principles guide all workflows.</li>
            <li><strong>Partnership:</strong> We succeed when our customers strengthen their operations.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Founder’s Note</h2>
          <p>
            “Reliability isn’t luck—it’s discipline. Helioriq was built for teams that take
            resilience seriously and want visibility before something breaks.”  
            <br />— The Helioriq Team
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Our Story</h2>
          <p>
            Helioriq started as a collaboration between cloud architects and reliability engineers
            who saw the same pattern across industries: cloud data everywhere, but no clear way to
            measure readiness. Today, we help enterprises unify operational, security, and backup
            insights in one calm, trustworthy platform.
          </p>
        </div>
      </section>

      <div className="mt-20">
        <CTASection
          heading="Join us on our mission"
          subtext="Partner with Helioriq to strengthen reliability and confidence across your cloud."
          buttonText="Request a Demo"
          buttonLink="/request-demo"
        />
      </div>
    </div>
  );
}
