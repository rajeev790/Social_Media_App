// src/components/Notifications.js

import React, { useEffect, useState } from 'react';
import { fetchNotifications } from '../api/notifications'; // Assume you have this function in your API file

const Notifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const getNotifications = async () => {
            try {
                const data = await fetchNotifications();
                setNotifications(data);
            } catch (error) {
                // Handle fetch error
            }
        };

        getNotifications();
    }, []);

    return (
        <div className="notifications">
            <h2>Notifications</h2>
            {notifications.map((notification) => (
                <div key={notification.id} className="notification">
                    <p>{notification.message}</p>
                </div>
            ))}
        </div>
    );
};

export default Notifications;
