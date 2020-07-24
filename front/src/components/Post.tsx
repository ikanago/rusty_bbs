import React from "react";

export type Post = {
    id: number;
    text: String;
    timestamp: Date;
};

export const PostEntity: React.FC<Post> = ({ id, text, timestamp }: Post) => (
    <div>
        <h3>{text}</h3>
        <p>{id}</p>
        <p>{timestamp}</p>
    </div>
);
