import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Helioriq. All rights reserved.
        </p>
        <div className="flex space-x-6 text-sm">
          <Link href="/trust" className="hover:text-brand-dark">
            Trust
          </Link>
          <Link href="/resources" className="hover:text-brand-dark">
            Resources
          </Link>
          <Link href="/privacy" className="hover:text-brand-dark">
            Privacy
          </Link>
          <Link href="/contact" className="hover:text-brand-dark">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
