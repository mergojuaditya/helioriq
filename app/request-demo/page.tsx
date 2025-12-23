"use client";

import { useState } from "react";

export default function RequestDemoPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      setError("Please fill out all required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Demo Request Received
        </h1>
        <p className="text-gray-600">
          Our team will reach out soon to schedule your personalized walkthrough.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Request a Demo
      </h1>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white border border-gray-100 p-6 rounded-lg shadow-soft"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name *
          </label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className="w-full border-gray-200 rounded-md p-2 focus:ring-brand focus:border-brand"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Work Email *
          </label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-gray-200 rounded-md p-2 focus:ring-brand focus:border-brand"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company *
          </label>
          <input
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            className="w-full border-gray-200 rounded-md p-2 focus:ring-brand focus:border-brand"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <input
            name="role"
            type="text"
            value={form.role}
            onChange={handleChange}
            className="w-full border-gray-200 rounded-md p-2 focus:ring-brand focus:border-brand"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand-dark transition"
        >
          Request Demo
        </button>
      </form>

      {/* Calendar placeholder */}
      <div className="mt-12 text-center text-gray-600 border-t border-gray-100 pt-8">
        <p>📅 Calendar scheduling integration coming soon.</p>
      </div>
    </div>
  );
}
