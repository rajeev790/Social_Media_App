// src/api/posts.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Base URL for the API

// Fetch all posts
export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}/posts/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Create a new post
export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_URL}/posts/`, postData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Like a post
export const likePost = async (postId) => {
    try {
        const response = await axios.post(`${API_URL}/posts/${postId}/like/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Comment on a post
export const commentOnPost = async (postId, commentData) => {
    try {
        const response = await axios.post(`${API_URL}/posts/${postId}/comment/`, commentData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
