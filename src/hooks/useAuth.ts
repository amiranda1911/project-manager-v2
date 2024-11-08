import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated] = useState(false);

  const setToken = (token: string) => {
    localStorage.setItem('token', JSON.stringify(token));
  };

  const getToken = () => {
    const id = localStorage.getItem('token');
    return JSON.parse(id!);
  };

  const verifyIsAuthenticated = () => {
    const item = localStorage.getItem('token');
    const token = item ? JSON.parse(item) : null;
    return !!token;
  };

  useEffect(() => {
    verifyIsAuthenticated();
  }, []);

  return {
    isAuthenticated,
    setToken,
    getToken,
    verifyIsAuthenticated,
  };
};
