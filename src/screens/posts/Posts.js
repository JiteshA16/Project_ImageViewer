import React from 'react';
import "./Posts.css"
import PostCard from '../postCard/PostCard';

const Posts = (props) => {
    console.log("posts container", props)
    
    const postsList = props.userPosts.map(post => {
        return <PostCard postId={post.id} userPost={post} isProfilePage={false} />
    })

    return (
        <div className="post-outer-container">
            {postsList}
        </div>
    )
}

export default Posts;