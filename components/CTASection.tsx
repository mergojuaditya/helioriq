import Link from "next/link";

interface CTASectionProps {
  heading: string;
  subtext: string;
  buttonText: string;
  buttonLink: string;
}

export function CTASection({ heading, subtext, buttonText, buttonLink }: CTASectionProps) {
  return (
    <section className="bg-brand-dark text-white py-16 px-6 text-center rounded-lg shadow-soft">
      <h2 className="text-3xl font-semibold mb-3">{heading}</h2>
      <p className="text-gray-200 mb-6">{subtext}</p>
      <Link
        href={buttonLink}
        className="inline-block bg-white text-brand-dark font-medium px-6 py-3 rounded-md hover:bg-gray-100 transition"
      >
        {buttonText}
      </Link>
    </section>
  );
}
