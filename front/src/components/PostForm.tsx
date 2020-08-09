import React, {useState} from "react";

type Props = {
    appendPost: Function;
};

export const PostForm = (props: Props) => {
    const [text, setText] = useState("");

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = {
            text: text,
        };
        console.log(params.toString());
        const response = await fetch("http://localhost:8080/posts", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });
        const post = await response.json();
        props.appendPost(post);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={event => setText(event.currentTarget.value)}
            />
            <input type="submit" value="Submit" />
        </form>
    );
}
