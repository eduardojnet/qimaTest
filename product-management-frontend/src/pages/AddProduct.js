import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { addProduct } from '../services/api';
const AddProduct = () => {
  const navigate = useNavigate();
const handleSubmit = async (product) => {
    await addProduct(product);
    navigate('/');
  };
return (
    <div>
      <h2>Add Product</h2>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};
export default AddProduct;