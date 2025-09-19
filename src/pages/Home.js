import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';

const Home = () => {
  const [categoryFilter, setCategoryFilter] = useState('all');

  const handleCategoryFilter = (filter) => {
    setCategoryFilter(filter);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar onCategoryFilter={handleCategoryFilter} />
      
      {/* Main Content */}
      <ProductGrid 
        categoryFilter={categoryFilter} 
        onClearFilter={handleCategoryFilter}
      />
    </div>
  );
};

export default Home;