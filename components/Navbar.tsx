"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Resources", href: "/resources" },
    { name: "Trust", href: "/trust" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="border-b border-gray-100 shadow-sm bg-white sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-semibold text-lg tracking-tight text-brand-dark"
        >
          Helioriq
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {/* Product Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-brand-dark">
              Product ▾
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-100 py-2 w-48">
              <Link
                href="/product"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Overview
              </Link>
              <Link
                href="/product/reliability"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Reliability
              </Link>
              <Link
                href="/product/security"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Security
              </Link>
              <Link
                href="/product/backup"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                Backup
              </Link>
            </div>
          </div>

          {/* Solutions Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-brand-dark">
              Solutions ▾
            </button>
            <div className="absolute left-0 mt-2 hidden group-hover:block bg-white shadow-lg rounded-md border border-gray-100 py-2 w-48">
              <Link
                href="/solutions"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                By Role
              </Link>
              <Link
                href="/industries"
                className="block px-4 py-2 hover:bg-gray-50"
              >
                By Industry
              </Link>
            </div>
          </div>

          {/* Static Links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-brand-dark"
            >
              {link.name}
            </Link>
          ))}

          {/* Request Demo Button */}
          <Link
            href="/request-demo"
            className="ml-2 px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark transition-colors"
          >
            Request Demo
          </Link>

          {/* Login / Sign Up */}
          <Link
            href="/login"
            className="ml-4 text-brand hover:text-brand-dark font-medium"
          >
            Log In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-white border border-brand text-brand rounded-md hover:bg-brand-light transition-colors font-medium"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-gray-700 hover:text-brand-dark"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="flex flex-col px-6 py-4 space-y-3">
            <Link href="/product" className="hover:text-brand-dark">
              Product Overview
            </Link>
            <Link href="/product/reliability" className="hover:text-brand-dark">
              Reliability
            </Link>
            <Link href="/product/security" className="hover:text-brand-dark">
              Security
            </Link>
            <Link href="/product/backup" className="hover:text-brand-dark">
              Backup
            </Link>
            <Link href="/solutions" className="hover:text-brand-dark">
              Solutions by Role
            </Link>
            <Link href="/industries" className="hover:text-brand-dark">
              Solutions by Industry
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-brand-dark"
              >
                {link.name}
              </Link>
            ))}
            <Link
  href="/login"
  className="text-gray-700 hover:text-brand-dark transition-colors"
>
  Login
</Link>
<Link
  href="/signup"
  className="ml-2 px-4 py-2 border border-brand text-brand rounded-md hover:bg-brand hover:text-white transition-colors"
>
  Sign Up
</Link>
            <Link
              href="/request-demo"
              className="px-4 py-2 text-center bg-brand text-white rounded-md"
            >
              Request Demo
            </Link>
           <Link
  href="/login"
  className="ml-4 text-gray-700 hover:text-brand-dark font-medium transition-colors"
>
  Log In
</Link>
<Link
  href="/signup"
  className="px-5 py-2 bg-brand text-white rounded-md hover:bg-brand-dark shadow-sm transition-all font-medium"
>
  Sign Up
</Link>

          </div>
        </div>
      )}
    </header>
  );
}
