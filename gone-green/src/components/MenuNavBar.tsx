import { useEffect, useState } from 'react';
import React from 'react';
import Link from 'next/link';

interface MenuNavbarProps {
  categories: string[];
  setActiveCategory: (category: string) => void;
}

const MenuNavbar: React.FC<MenuNavbarProps> = ({ categories, setActiveCategory }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  });
  return mounted && (
    <nav className="bg-green-700 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-purple text-2xl font-bold"></div>
        <ul className="space-x-4">
          {categories.map((category, index) => (
            <li key={index} className="inline-block mr-4">
              {/* <Link href={`${category.toLowerCase()}`} */}
              <Link href={''}
                onClick={() => setActiveCategory(category)}
                className="text-white text-lg hover:underline"
                >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default MenuNavbar;
