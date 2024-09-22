// src/utils/auth.js

/**
 * Set a token in local storage.
 * @param {string} token - The token to be stored.
 */
export const setToken = (token) => {
    localStorage.setItem('authToken', token);
};

/**
 * Get the token from local storage.
 * @returns {string|null} - The token from local storage or null if not found.
 */
export const getToken = () => {
    return localStorage.getItem('authToken');
};

/**
 * Remove the token from local storage.
 */
export const removeToken = () => {
    localStorage.removeItem('authToken');
};

/**
 * Check if the user is authenticated by verifying if a token exists.
 * @returns {boolean} - True if authenticated, otherwise false.
 */
export const isAuthenticated = () => {
    return !!getToken();
};
