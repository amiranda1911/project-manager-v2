import { useState, useEffect } from 'react';

// Funções de utilidade para manipular o localStorage
const setLocalStorage = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getLocalStorage = (key: string): string | null => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const setAuthorization = (token: string) => {
    setLocalStorage('token', token);
    setIsAuthenticated(!!token);
  };

  const verifyIsAuthenticated = () => {
    const token = getLocalStorage('token');
    setIsAuthenticated(!!token);
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
