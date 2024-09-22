// src/components/Profile.js

import React, { useEffect, useState } from 'react';
import { fetchUserProfile } from '../api/auth'; // Assume you have this function in your API file

const Profile = ({ userId }) => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const getProfile = async () => {
            try {
                const data = await fetchUserProfile(userId);
                setProfile(data);
            } catch (error) {
                // Handle fetch error
            }
        };

        getProfile();
    }, [userId]);

    if (!profile) return <p>Loading...</p>;

    return (
        <div className="profile">
            <img src={profile.avatarUrl} alt="Profile" className="profile-avatar" />
            <h2>{profile.name}</h2>
            <p>{profile.bio}</p>
        </div>
    );
};

export default Profile;
