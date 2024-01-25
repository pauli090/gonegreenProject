'use client';
import React, { useState } from 'react';
import menuData from '../MenuData.json';
import Search from './Search';
import MenuItem, { MenuItemProps } from './MenuItem';

interface Category {
  name: string;
  items: MenuItemProps[];
}

const MenuSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredMenu, setFilteredMenu] = useState<Category[]>(menuData.categories);

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    // Perform the search logic and update the filteredMenu state
    const filteredCategories = menuData.categories.map((category) => {
      return {
        ...category,
        items: category.items.filter((item) =>
          item.ingredients && item.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query.toLowerCase()))
        ),
      };
    });

    setFilteredMenu(filteredCategories);
  };

  return (
    <div className="bg-lime-100 container mx-1.5 my-1.5 px-6 py-4">
      <Search onSearch={handleSearch} />

      {searchQuery && (
        <div>
          {filteredMenu.map((category) => (
            <div key={category.name} className="my-4">
              <h2 className="text-orange font-bold mb-2">
                {category.name} Menu
              </h2>
              {category.items.map((item, index) => (
                <MenuItem key={index} name={item.name} />
              ))}
            </div>
          ))}
        </div>
      )}

      {!searchQuery && (
        <div className="my-4">
          <p className="text-gray-600">Please try different ingredients</p>
        </div>
      )}
    </div>
  );
};

export default MenuSearch