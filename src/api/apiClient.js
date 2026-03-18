import axios from 'axios';
import toast from 'react-hot-toast';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error?.response?.data?.message || error.message || 'An unexpected error occurred';
    toast.error(message);
    console.error('API Error:', message);
    return Promise.reject(error);
  }
);

export default apiClient;
