import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Posts } from "./Posts";
import { Login } from "./Login";
import { Header } from "./Header";

export const Home = () => (
    <div>
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Posts} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    </div>
);
