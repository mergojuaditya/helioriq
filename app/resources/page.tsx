import Link from "next/link";
import { CTASection } from "@/components/CTASection";

export default function ResourcesPage() {
  const articles = [
    { title: "Building Cloud Reliability Programs", href: "#" },
    { title: "AI for Cloud Risk Detection", href: "#" },
    { title: "The Role of Backup Readiness in Compliance", href: "#" },
    { title: "Top 10 Misconfigurations in 2025", href: "#" },
    { title: "Operational Visibility in Hybrid Clouds", href: "#" },
    { title: "Preparing for Incident Readiness (MIRP)", href: "#" },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Resources
      </h1>
      <p className="text-gray-600 text-center mb-12">
        Explore articles, guides, and whitepapers that help your team improve reliability
        and security awareness.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {articles.map((a, i) => (
          <div
            key={i}
            className="border border-gray-100 rounded-lg p-6 shadow-soft bg-white hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{a.title}</h3>
            <p className="text-sm text-gray-600 mb-3">
              A brief overview of best practices and key insights.
            </p>
            <Link href={a.href} className="text-brand hover:text-brand-dark text-sm font-medium">
              Read more →
            </Link>
          </div>
        ))}
      </div>

      <CTASection
        heading="Download the Whitepaper"
        subtext="Get the complete guide to Cloud Incident Readiness (MIRP) and learn how to prevent outages before they start."
        buttonText="Download"
        buttonLink="#"
      />
    </div>
  );
}
