import React from 'react';
import "./Posts.css"
import PostCard from '../postCard/PostCard';
import ProfileInner from '../profile/ProfileInner';

const Posts = (props) => {
    const postsList = props.userPosts.map(post => {
        return <PostCard postId={post.id} userPost={post} isProfilePage={false} />
    })

    return (
        <div>
            {props.isProfilePage ?
                <ProfileInner posts={props.userPosts}/> :
                 <div className="post-outer-container">
                    {postsList}
                </div>
            }
        </div>
    )
}

export default Posts;