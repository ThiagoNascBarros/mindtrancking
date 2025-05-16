import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  const isImage = icon.startsWith("/") || icon.startsWith("http");

  return (
    <div className="border-4 border-[#2544F4] rounded-lg p-6 shadow hover:shadow-md transition">
      <div className="text-3xl mb-4">
        {isImage ? (
          <img src={icon} alt={title} className="w-8 h-8" />
        ) : (
          icon
        )}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};
