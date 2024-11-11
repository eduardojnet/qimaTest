import React, { useEffect, useState } from 'react';
import { fetchProducts } from '../services/api';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null); // Estado para o erro

  useEffect(() => {
    const loadProducts = async () => {
        try {
          const response = await fetchProducts();
          console.log("API Response:", response.data); // Verifique a estrutura de response.data
      
          // Certifique-se de que `response.data` é um array antes de chamar `setProducts`
          setProducts(Array.isArray(response.data) ? response.data : []);
        } catch (error) {
          console.error("Error fetching products:", error);
          setProducts([]); // Define como array vazio em caso de erro
        }
      };
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Exibe mensagem de erro, se houver */}
      {products.length > 0 ? (
        products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))
      ) : (
        !error && <p>No products available.</p> // Mensagem caso não haja produtos
      )}
    </div>
  );
};

export default ProductList;
