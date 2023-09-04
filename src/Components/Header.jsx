/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="navbar bg-base-300">
            <Link to="/" className="btn btn-ghost normal-case text-2xl">daisyUI</Link>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
            <Link to="/register" className="btn btn-ghost normal-case text-xl">Register</Link>
        </div>
    );
};

export default Header;