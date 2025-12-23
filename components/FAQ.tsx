"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div key={index} className="border border-gray-100 rounded-md shadow-soft bg-white">
          <button
            className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-900 font-medium"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {faq.question}
            <ChevronDown
              size={18}
              className={`transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-4 pb-4 text-gray-600 text-sm leading-relaxed">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
