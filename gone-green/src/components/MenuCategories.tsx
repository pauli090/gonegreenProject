import React from 'react';
import menuData from '../MenuData.json';
import './menu.css'
console.log(menuData);
interface MenuItemProps {
  name: string;
  price: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price }) => (
  <div className="menuItem">
    <span className="itemName">{name}</span>
    <span className="itemPrice">N{price}</span>
  </div>
);

interface MenuProps {
  category: string;
}

const Menu: React.FC<MenuProps> = ({ category }) => {
  const categoryData = menuData.categories.find((data) => data.name === category);

  console.log('Props received by Menu:', { category, categoryData });

  if (!categoryData) {
    return <div>No data available for this category.</div>;
  }

  return (
    <div>
      <h2 className="flex justify-between text-xl font-bold mb-4 px-6">{category} Menu</h2>
      {categoryData.items.map((item, index) => (
        <MenuItem key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
};


export default Menu;