
import React from "react";
import PostItem from "./PostItem";
const PostList = ({post, title, remove}) => {
console.log(post);
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>{title}</h1>
            {post.map((item, index) =>
                <PostItem remove = {remove} number = {index + 1} post={item} key={item.id} />
            )}
        </div>
    )
};

export default PostList