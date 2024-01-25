"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Menu from "../../components/MenuCategories";
import menuData from "../../MenuData.json";
import MenuSearch from "../../components/MenuSearch";
import Layout from "../../components/Layout";
import MenuNavbar from "@/components/MenuNavBar";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("");

  useEffect(() => {
    if (menuData.categories && menuData.categories.length > 0) {
      setActiveCategory(menuData.categories[0].name);
    }
  }, []);

  return (
    
      <div className="text-3xl-green">
        <MenuNavbar
          categories={menuData.categories.map((cat) => cat.name)}
          setActiveCategory={setActiveCategory}
        />
        <MenuSearch />
        <Menu category={activeCategory} />
      </div>
    
  );
};

export default MenuPage;
