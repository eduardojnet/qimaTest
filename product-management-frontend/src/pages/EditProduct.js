import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { fetchProduct, updateProduct } from '../services/api';
const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
useEffect(() => {
    const loadProduct = async () => {
      const response = await fetchProduct(id);
      setInitialData(response.data);
    };
    loadProduct();
  }, [id]);
const handleSubmit = async (updatedProduct) => {
    await updateProduct(id, updatedProduct);
    navigate('/');
  };
return initialData ? (
    <div>
      <h2>Edit Product</h2>
      <ProductForm initialData={initialData} onSubmit={handleSubmit} />
    </div>
  ) : (
    <p>Loading...</p>
  );
};
export default EditProduct;