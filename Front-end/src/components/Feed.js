// src/components/Feed.js

import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts'; // Assume you have this function in your API file
import Post from './Post';

const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const data = await fetchPosts();
                setPosts(data);
            } catch (error) {
                // Handle fetch error
            }
        };

        getPosts();
    }, []);

    return (
        <div className="feed">
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;
