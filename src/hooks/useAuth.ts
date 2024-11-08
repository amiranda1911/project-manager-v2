import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated] = useState(false);

  const setToken = (token: string) => {
    localStorage.setItem('token', JSON.stringify(token));
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
    verifyIsAuthenticated,
  };
};
