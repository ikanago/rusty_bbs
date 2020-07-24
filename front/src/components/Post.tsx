import React from "react";

export type PostProps = {
    id: number;
    text: String;
    timestamp: Date;
};

export const Post: React.FC<PostProps> = ({
    id,
    text,
    timestamp,
}: PostProps) => (
    <div>
        <h3>{text}</h3>
        <p>{id}</p>
        <p>{timestamp}</p>
    </div>
);
