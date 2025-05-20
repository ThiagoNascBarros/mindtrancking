import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconSize?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconSize = "w-8 h-8" }) => {
  const isImage = icon.startsWith("/") || icon.startsWith("http");

  return (
    <div className="border-4 border-[#2544F4] rounded-lg p-4 sm:p-5 md:p-6 shadow hover:shadow-md transition">
      <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">
        {isImage ? (
          <img src={icon} alt={title} className={iconSize} />
        ) : (
          icon
        )}
      </div>
      <h3 className="font-semibold text-base sm:text-lg mb-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600">{description}</p>
    </div>
  );
};
