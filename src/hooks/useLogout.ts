import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogout = () => {
  const navigate = useNavigate();

  const removeToken = useCallback(() => {
    localStorage.removeItem('token');
    navigate('/');
  }, [navigate]);

  return removeToken;
};

export default useLogout;
