// src/components/Products.js
import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import '../../index.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0); // Estado para controlar a categoria ativa

  useEffect(() => {
    setProducts(data.products); // Carrega os dados do arquivo JSON
  }, []);

  const handleCategoryClick = (index) => {
    setActiveCategoryIndex(index); // Atualiza a categoria ativa
  };

  return (
    <main>
      {/* Div para o título da categoria */}
      <div className="category-title-container"> 
        <h2 className="product-category-title">
          Savourez les meilleurs {products[activeCategoryIndex]?.category}
        </h2>
      </div>

      {/* Seção de categorias */}
      <section className="categories">
        {products.map((category, index) => (
          <div 
            key={index} 
            className={`category ${index === activeCategoryIndex ? 'active-category' : ''}`} 
            onClick={() => handleCategoryClick(index)}
          >
            <img src={category.cover} alt={category.category} className="category-card-img" />
            <h3 className="category-title">{category.category}</h3>
          </div>
        ))}
      </section>

      {/* Seção para produtos da categoria ativa */}
      <section className="current-products-categories">
        <div className="current-products">
          {products.length > 0 && products[activeCategoryIndex].items.map((item, idx) => (
            <div key={idx} className="product">
              <img src={item.image} alt={item.name} />
              <h3 className="product-title">{item.name}</h3>
              <p className="product-price">Prix: €{item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;


