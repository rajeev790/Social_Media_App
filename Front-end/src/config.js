// src/config.js
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api';

export const config = {
  api: {
    auth: `${API_BASE_URL}/auth/`,
    posts: `${API_BASE_URL}/posts/`,
    notifications: `${API_BASE_URL}/notifications/`,
    follows: `${API_BASE_URL}/follows/`,
  },
  media: {
    baseUrl: `${API_BASE_URL}/media/`,
  },
};
