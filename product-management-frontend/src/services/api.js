import axios from 'axios';

console.log('API URL:', process.env.REACT_APP_API_URL);
console.log('Username:', process.env.REACT_APP_API_USERNAME);
console.log('Password:', process.env.REACT_APP_API_PASSWORD);

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Backend API URL
  auth: {
    username: process.env.REACT_APP_API_USERNAME,
    password: process.env.REACT_APP_API_PASSWORD
  },
  withCredentials: true
});


export const fetchProducts = () => api.get('/products');
export const fetchProduct = (id) => api.get(`/${id}`);
export const addProduct = (product) => api.post('/', product);
export const updateProduct = (id, product) => api.put(`/${id}`, product);
export const deleteProduct = (id) => api.delete(`/${id}`);

export default api;