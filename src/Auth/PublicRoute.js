import React from 'react';
import {  Navigate } from 'react-router-dom';
import { isLoggedIn } from '../utils';

function PublicRoute({ children }) {
    const auth = isLoggedIn();
    return auth ? <Navigate to="/" /> : children;
  }
export default PublicRoute;