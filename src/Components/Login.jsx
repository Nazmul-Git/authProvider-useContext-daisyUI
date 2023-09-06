/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';



const Login = () => {
    const { user, userLogin, googleSignIn } = useContext(AuthContext);

    const loggedUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(form, email, pass);


        userLogin(email, pass)
            .then(result => {
                const userInfo = result.user;
                console.log(userInfo);
                form.reset();

            })
            .catch(error => {
                console.log(error.message);
            })


    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.error(error.message);
            })

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={loggedUser} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link to='/register' className="label-text-alt link link-hover"><small>Are you new in this site?</small> Please register..</Link>
                        </form>
                        <Link to="/home">
                            <button onClick={handleGoogleSignIn} className="btn btn-xs m-6 hover:text-blue-600">Sign in with Gmail</button>

                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;