import React from "react";

type FormState = {
    text: string;
};

type Props = {
    appendPost: Function;
};

export class PostForm extends React.Component<Props, FormState> {
    state: FormState = {
        text: "",
    };

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ text: event.currentTarget.value });
    };

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = {
            text: this.state.text,
        };
        console.log(params.toString());
        const res = await fetch("http://localhost:8080/posts", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(params),
        });
        const post = await res.json();
        this.props.appendPost(post);
    };

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                <input type="submit" value="Submit" />
            </form>
        );
    };
}
