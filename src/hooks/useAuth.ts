import { useState, useEffect } from 'react';

const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string): string | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const useAuth = () => {
  const [isAuthenticated] = useState(false);

  const setAuthorization = (token: string) => {
    setLocalStorage('token', token);
  };

  const verifyIsAuthenticated = () => {
    const token = getLocalStorage('token');
    return !!token;
  };

  useEffect(() => {
    verifyIsAuthenticated();
  }, []);

  return {
    isAuthenticated,
    setAuthorization,
    verifyIsAuthenticated,
  };
};
