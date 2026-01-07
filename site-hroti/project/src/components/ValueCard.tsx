import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ValueCard({ icon: Icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full mb-3 sm:mb-4">
        <Icon className="h-5 sm:h-6 w-5 sm:w-6 text-blue-600" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
}