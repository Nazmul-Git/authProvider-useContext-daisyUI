/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Register = () => {
    const {user, createUser}=useContext(AuthContext);

    const registerUser=(e)=>{
        e.preventDefault();
        const form=e.target;
        const name=form.name.value;
        const email=form.email.value;
        const pass=form.password.value;
        console.log(name,email,pass);

        createUser(email, pass)
        .then(result=>{
            const registerUser=result.user;
            console.log(registerUser);
            form.reset();
        })
        .catch(error=>{
            console.log(error.message);
        })

        

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={registerUser} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">username</span>
                            </label>
                            <input type="text" name='name' required placeholder="username" className="input input-bordered" />
                        </div>
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
                            <input type="Password" name='password' required placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <Link to='/login' className="label-text-alt link link-hover"><small>Already have an account?</small> Please Login</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;