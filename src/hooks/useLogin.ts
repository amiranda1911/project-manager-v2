import axios from 'axios';
import { baseUrl } from '../constants';
import { UserProps } from '../interface/User';
import { useAuth } from './useAuth';
import { useState } from 'react';

interface validateCredentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValidCredentials, setIsValidCredentials] = useState(false);
  const [error, setError] = useState('');

  const { setToken } = useAuth();
  const validateCredentials = async ({
    email,
    password,
  }: validateCredentials) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/users`);

      const users: [UserProps] = response.data;
      users.map((user) => {
        if (user.email === email && user.password === password) {
          setToken(user.id);
          setIsValidCredentials(true);
          return true;
        } else {
          setIsValidCredentials(false);
        }
      });
    } catch (error) {
      setError('Ocorreu um erro desculpa pelo ocorrido!');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { validateCredentials, isLoading, isValidCredentials, error };
};
