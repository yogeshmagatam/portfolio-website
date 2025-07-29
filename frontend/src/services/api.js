import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_REACT_APP_BACKEND_URL || 'http://localhost:8001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('admin_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('admin_token');
      window.location.href = '/admin/login';
    }
    return Promise.reject(error);
  }
);

// API methods
export const portfolioAPI = {
  // Public endpoints
  getProjects: () => api.get('/api/projects'),
  getBlogPosts: () => api.get('/api/blog'),
  getSkills: () => api.get('/api/skills'),
  getExperience: () => api.get('/api/experience'),
  submitContact: (data) => api.post('/api/contact', data),

  // Admin endpoints
  login: (email, password) => {
    const formData = new FormData();
    formData.append('username', email);
    formData.append('password', password);
    return api.post('/api/admin/login', formData);
  },
  
  getContacts: () => api.get('/api/admin/contacts'),
  
  createProject: (data) => api.post('/api/admin/projects', data),
  updateProject: (id, data) => api.put(`/api/admin/projects/${id}`, data),
  deleteProject: (id) => api.delete(`/api/admin/projects/${id}`),
  
  createBlogPost: (data) => api.post('/api/admin/blog', data),
  updateBlogPost: (id, data) => api.put(`/api/admin/blog/${id}`, data),
  deleteBlogPost: (id) => api.delete(`/api/admin/blog/${id}`),
};

export default api;