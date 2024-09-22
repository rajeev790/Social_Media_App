// src/components/Post.js

import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="post">
            <img src={post.imageUrl} alt="Post" className="post-image" />
            <p>{post.text}</p>
            <div className="post-actions">
                <button>Like</button>
                <button>Comment</button>
            </div>
        </div>
    );
};

export default Post;
