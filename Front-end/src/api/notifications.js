// src/api/notifications.js

import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL; // Base URL for the API

// Fetch user notifications
export const fetchNotifications = async () => {
    try {
        const response = await axios.get(`${API_URL}/notifications/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

// Mark notification as read
export const markNotificationAsRead = async (notificationId) => {
    try {
        const response = await axios.post(`${API_URL}/notifications/${notificationId}/read/`);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
