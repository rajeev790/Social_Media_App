// src/api/follows.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Base URL for the API

// Follow a user
export const followUser = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/follows/${userId}/follow/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Unfollow a user
export const unfollowUser = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/follows/${userId}/unfollow/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Fetch the list of followers
export const fetchFollowers = async () => {
    try {
        const response = await axios.get(`${API_URL}/follows/followers/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Fetch the list of following
export const fetchFollowing = async () => {
    try {
        const response = await axios.get(`${API_URL}/follows/following/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
