import React from "react";
import { Post, PostEntity } from "../components/Post";

type PostsState = {
    posts: Post[];
};

export class Posts extends React.Component<{}, PostsState> {
    state: PostsState = {
        posts: [],
    };

    componentDidMount = async () => {
        const res = await fetch("http://localhost:8080/posts");
        const posts: Post[] = await res.json();
        this.setState({
            posts: posts,
        });
    };

    render = () => {
        return (
            <div>
                {this.state.posts.map(post => (
                    <PostEntity
                        id={post.id}
                        text={post.text}
                        timestamp={post.timestamp}
                    />
                ))}
            </div>
        );
    };
}
