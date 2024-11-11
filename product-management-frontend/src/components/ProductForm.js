import React, { useState } from 'react';
const ProductForm = ({ initialData = {}, onSubmit }) => {
  const [product, setProduct] = useState({
    name: initialData.name || '',
    description: initialData.description || '',
    price: initialData.price || '',
  });
const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };
const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(product);
  };
return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={product.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="description" value={product.description} onChange={handleChange} placeholder="Description" />
      <input type="number" name="price" value={product.price} onChange={handleChange} placeholder="Price" />
      <button type="submit">Submit</button>
    </form>
  );
};
export default ProductForm;