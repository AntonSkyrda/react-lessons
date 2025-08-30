import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {postsService} from "../../service/api.service.ts";

type PostsPropsType = {
    userId: string;
}

export const PostsComponent: FC<PostsPropsType> = ({userId}) => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        if (userId) {
            postsService.getUserPostsByUserId(+userId)
                .then(userPosts => setPosts(userPosts))
        }
    }, [userId]);
    return (
        <div>
            {
                posts.map(post => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};