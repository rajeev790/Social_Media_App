// src/utils/helpers.js

/**
 * Format a date into a human-readable format.
 * @param {Date|string} date - The date to format.
 * @returns {string} - The formatted date string.
 */
export const formatDate = (date) => {
    if (typeof date === 'string') {
        date = new Date(date);
    }
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

/**
 * Truncate a string to a specified length and append ellipsis if needed.
 * @param {string} str - The string to truncate.
 * @param {number} length - The length to truncate to.
 * @returns {string} - The truncated string.
 */
export const truncateString = (str, length) => {
    if (str.length <= length) {
        return str;
    }
    return str.slice(0, length) + '...';
};

/**
 * Generate a random color in hex format.
 * @returns {string} - The generated color in hex format.
 */
export const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};
