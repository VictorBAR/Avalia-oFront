/* import React from 'react';
import IsAuth from './auth';

import  { Navigate, Route } from 'react-router-dom'

const PrivateRouter = props => {

    //const isLogged = localStorage.getItem('auth') == 200;
    return IsAuth() ? <Route {...props} /> : <Navigate to="/login"/>
} 

export default PrivateRouter; */

import isAuthenticated from "./auth";

import { Navigate } from 'react-router-dom'

function PrivateRoute({ children }) {
    const auth = isAuthenticated();
    return isAuthenticated() ? children : <Navigate to="/login" />;
}

export default PrivateRoute