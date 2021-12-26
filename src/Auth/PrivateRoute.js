import React from 'react';
import { Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils';


function PrivateRoute({ children }) {
    const auth = isLoggedIn();
    return auth ? children : <Navigate to="/login" />;
  }

export default PrivateRoute;