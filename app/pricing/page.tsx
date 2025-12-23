import { FeatureComparisonTable } from "@/components/FeatureComparisonTable";
import { FAQ } from "@/components/FAQ";
import { CTASection } from "@/components/CTASection";

export default function PricingPage() {
  const headers = ["Starter", "Growth", "Enterprise"];
  const rows = [
    { feature: "Cloud Account Coverage", values: ["1", "Up to 10", "Unlimited"] },
    { feature: "Real-time Risk Detection", values: ["✓", "✓", "✓"] },
    { feature: "Backup & Recovery Insights", values: ["✓", "✓", "✓"] },
    { feature: "Advanced Security Scanning", values: ["–", "✓", "✓"] },
    { feature: "Custom Dashboards", values: ["–", "–", "✓"] },
    { feature: "Dedicated Support", values: ["–", "–", "✓"] },
  ];

  const faqs = [
    {
      question: "Is there a free plan?",
      answer:
        "Yes — Helioriq offers a free Starter tier so you can explore core reliability and security insights before upgrading.",
    },
    {
      question: "Do I need to connect my production environment?",
      answer:
        "No. Helioriq can analyze sandbox or staging accounts to demonstrate results before full deployment.",
    },
    {
      question: "How does billing work?",
      answer:
        "Pricing is usage-based and scales by number of cloud accounts. Contact sales for detailed Enterprise pricing.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Simple, transparent pricing
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Choose the plan that fits your organization’s scale. Upgrade anytime.
      </p>

      <FeatureComparisonTable headers={headers} rows={rows} />

      <div className="mt-16">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Pricing FAQ
        </h2>
        <div className="max-w-3xl mx-auto">
          <FAQ items={faqs} />
        </div>
      </div>

      <div className="mt-20">
        <CTASection
          heading="Ready to get started?"
          subtext="Contact our team for custom Enterprise pricing or start with the free tier today."
          buttonText="Request a Demo"
          buttonLink="/request-demo"
        />
      </div>
    </div>
  );
}
