'use client';

import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Menu from './MenuCategories';
import MenuNavbar from './MenuNavBar';
import menuData from '../MenuData.json';
import MenuSearch from './MenuSearch';

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState('');

  useEffect(() => {
    if (menuData.categories && menuData.categories.length > 0) {
      setActiveCategory(menuData.categories[0].name);
    }
  }, []);

  return (
    <Layout>
      <div className="text-3xl-green font-bold">
        
        <MenuNavbar
          categories={menuData.categories.map((cat) => cat.name)}
          setActiveCategory={setActiveCategory}
        />
        <MenuSearch />
        <Menu category={activeCategory} />
      </div>
    </Layout>
  );
};

export default MenuPage;