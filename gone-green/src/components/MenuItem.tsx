
import React from 'react';

interface MenuItemProps {
  name: string;

}

const MenuItem: React.FC<MenuItemProps> = ({ name }) => {
  return (
    <div>
      <span className="itemName">{name}</span>
    </div>
  );
};

export default MenuItem;
export type { MenuItemProps };