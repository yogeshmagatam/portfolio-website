import axios from 'axios';

const API_BASE_URL = import.meta.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// API methods
export const portfolioAPI = {
  // Public endpoints
  getProjects: () => api.get('/api/projects'),
  getBlogPosts: () => api.get('/api/blog'),
  getSkills: () => api.get('/api/skills'),
  getExperience: () => api.get('/api/experience'),
  submitContact: (data) => api.post('/api/contact', data),
};

export default api;