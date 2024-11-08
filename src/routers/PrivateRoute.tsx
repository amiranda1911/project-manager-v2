import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
// import { useAuth } from '../hooks/useAuth';

const PrivateRoute: React.FC = () => {
  // const { verifyIsAuthenticated } = useAuth();
  const isAuthenticated = true;
  return isAuthenticated ? <Outlet /> : <Navigate to="/notauthorization" />;
};

export default PrivateRoute;
