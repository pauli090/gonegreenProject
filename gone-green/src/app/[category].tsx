import { useRouter } from 'next/router';
import React from 'react';
import Layout from '../components/Layout';
import Menu from '../components/MenuCategories';
import menuData from '../MenuData.json';

const MenuCategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const categoryData = menuData.categories.find((data) => data.name === category);

  return (
    <Layout>
      <h1>{category} Menu</h1>
      <Menu category={category as string} menuDataEl={categoryData} />
    </Layout>
  );
};

export default MenuCategoryPage;