import React from "react";
import { Link } from "react-router-dom";

export const Header = () => (
    <div>
        <h1>Rusty BBS</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </div>
);
