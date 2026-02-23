'use client';

import { FC } from "react";
import { AddCircle } from "iconsax-react";

interface Category {
  name: string;
  id: string; // the id of the section to scroll to
}

const Menuu: FC = () => {
  const categories: Category[] = [
    { name: "Popular", id: "popex" },
    { name: "Jollof Rice & Entrees", id: "jolex" },
    { name: "Swallow & Soups", id: "swaex" },
    { name: "Grills & sides", id: "grills-section" },
    { name: "Beverages", id: "beverages-section" },
    { name: "Desserts", id: "desserts-section" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-fit bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Menu Categories
          </h2>

          <div className="space-y-3">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(category.id)}
                className="w-full flex items-center justify-between py-3 px-4 hover:bg-gray-50 rounded-lg transition-colors group text-left"
              >
                <div className="flex items-center space-x-2">
                  <AddCircle className="text-orange-500" size="20" />
                  <span className="text-gray-700 group-hover:text-orange-600">
                    {category.name}
                  </span>
                </div>
                <span className="text-gray-400 group-hover:text-orange-600">
                  →
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menuu;