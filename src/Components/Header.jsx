/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Header = () => {
    const { user, userLogOut } = useContext(AuthContext);
    console.log(user);

    const logOutUser = () => {
        userLogOut()
            .then(() => {})
            .catch(error => console.error(error))
    }
    return (

        <div className="navbar bg-base-300">
            <Link to="/" className="btn btn-ghost normal-case text-2xl">daisyUI</Link>
            <Link to="/" className="btn btn-ghost normal-case text-xl">Home</Link>
            <Link to="/orders" className="btn btn-ghost normal-case text-xl">Orders</Link>
            <Link to="/login" className="btn btn-ghost normal-case text-xl">Login</Link>
            <Link to="/register" className="btn btn-ghost normal-case text-xl mr-20">Register</Link>
            {
                user ? <>
                    <span>{user.email}</span>
                    <button onClick={logOutUser} className='btn btn-xs ml-10'>Sign Out</button>
                </>
                    :
                    <Link to="/login">Login</Link>
            }
        </div>
    );
};

export default Header;