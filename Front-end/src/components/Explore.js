// src/components/Explore.js

import React, { useEffect, useState } from 'react';
import { fetchTrendingPosts } from '../api/posts'; // Assume you have this function in your API file
import Post from './Post';

const Explore = () => {
    const [trendingPosts, setTrendingPosts] = useState([]);

    useEffect(() => {
        const getTrendingPosts = async () => {
            try {
                const data = await fetchTrendingPosts();
                setTrendingPosts(data);
            } catch (error) {
                // Handle fetch error
            }
        };

        getTrendingPosts();
    }, []);

    return (
        <div className="explore">
            <h2>Explore Trending Posts</h2>
            {trendingPosts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Explore;
