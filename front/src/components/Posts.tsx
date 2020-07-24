import React from "react";
import { PostForm } from "./PostForm";
import { PostProps, Post } from "../components/Post";

type PostsState = {
    posts: PostProps[];
};

export class Posts extends React.Component<{}, PostsState> {
    state: PostsState = {
        posts: [],
    };

    componentDidMount = async () => {
        const res = await fetch("http://localhost:8080/posts");
        const posts: PostProps[] = await res.json();
        this.setState({
            posts: posts,
        });
    };

    appendPost = (post: PostProps) => {
        const posts = [...this.state.posts, post];
        this.setState({
            posts: posts,
        });
    };

    render = () => {
        return (
            <div>
                <div>
                    <PostForm appendPost={this.appendPost} />
                    {this.state.posts.map(post => (
                        <Post
                            id={post.id}
                            text={post.text}
                            timestamp={post.timestamp}
                        />
                    ))}
                </div>
            </div>
        );
    };
}
