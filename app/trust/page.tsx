import { ShieldCheck, Eye, Lock } from "lucide-react";
import { CapabilityCard } from "@/components/CapabilityCard";
import { CTASection } from "@/components/CTASection";

export default function TrustPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Trust & Security
      </h1>
      <p className="text-gray-600 text-center max-w-3xl mx-auto mb-16">
        Helioriq follows strict principles of least privilege, read-only access, and transparent
        audit logging to protect customer data. Our goal is to be security-friendly and
        compliance-ready from day one.
      </p>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <CapabilityCard
          icon={<ShieldCheck size={26} />}
          title="Least Privilege"
          description="Helioriq connects using read-only credentials, ensuring no write or modify actions within your environments."
        />
        <CapabilityCard
          icon={<Eye size={26} />}
          title="Audit Transparency"
          description="All platform actions are logged for full visibility and traceability during reviews or compliance audits."
        />
        <CapabilityCard
          icon={<Lock size={26} />}
          title="Data Handling"
          description="Configuration data is encrypted in transit and at rest. We never store sensitive customer secrets or payloads."
        />
      </div>

      <section className="text-gray-700 leading-relaxed space-y-4 mb-20">
        <h2 className="text-2xl font-semibold text-gray-900">Compliance-Friendly Positioning</h2>
        <p>
          While Helioriq does not make formal certification claims, its architecture is designed to
          align with major frameworks such as SOC 2, ISO 27001, and CIS Benchmarks. Our engineering
          roadmap prioritizes customer readiness for these standards.
        </p>
      </section>

      <CTASection
        heading="Your security is our foundation"
        subtext="Learn how Helioriq can integrate securely within your environment and align with your compliance goals."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
  );
}
