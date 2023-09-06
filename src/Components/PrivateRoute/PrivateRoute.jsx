/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    if(loading){
        return <span className="loading loading-ring loading-lg m-96"></span>

    }
    if(user){
        return children;
    }
    return <Navigate to="/login" replace={true}></Navigate>
};

export default PrivateRoute;