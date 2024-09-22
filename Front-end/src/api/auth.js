// src/api/auth.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Base URL for the API

// Register a new user
export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/users/register/`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Login a user
export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/users/login/`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Logout a user
export const logoutUser = async () => {
    try {
        const response = await axios.post(`${API_URL}/users/logout/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
