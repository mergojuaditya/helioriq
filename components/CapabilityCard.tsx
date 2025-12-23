import { ReactNode } from "react";

interface CapabilityCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
}

export function CapabilityCard({ title, description, icon }: CapabilityCardProps) {
  return (
    <div className="border border-gray-100 shadow-soft rounded-lg p-6 text-left hover:shadow-md transition-shadow bg-white">
      <div className="mb-4 text-brand">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
}
