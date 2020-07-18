import React from "react";

type FormState = {
    text: string;
}

export class PostForm extends React.Component<{}, FormState> {
    state: FormState = {
        text: '',
    };

    handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        this.setState({ text: event.currentTarget.value });
    };

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    render = () => {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <input type="submit" value="Submit" />
            </form>
        );
    };
}
