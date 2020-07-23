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

    handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const params = new URLSearchParams();
        params.append('text', this.state.text);
        console.log(params.toString());
        const result = await fetch('http://server:8080/submit', {
            method: 'POST',
            mode: 'cors',
            body: params,
        });
        const res = await result.text().catch(console.error);
        console.log(res);
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
