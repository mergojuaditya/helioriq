"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill out the required fields.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-6 py-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">
          Thank you for reaching out
        </h1>
        <p className="text-gray-600">
          We’ll get back within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto px-6 py-20">
      <h1 className="text-4xl font-semibold text-gray-900 mb-8 text-center">
        Contact Us
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

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company
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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message *
          </label>
          <textarea
            name="message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            className="w-full border-gray-200 rounded-md p-2 focus:ring-brand focus:border-brand"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full bg-brand text-white py-2 rounded-md hover:bg-brand-dark transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
