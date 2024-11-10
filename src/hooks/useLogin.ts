import axios from 'axios';
import { baseUrl } from '../constants';
import { UserProps } from '../interface/User';
import { useAuth } from './useAuth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface validateCredentials {
  email: string;
  password: string;
}

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isValidCredentials, setIsValidCredentials] = useState<false | true>(); // Inicializando como false
  const [error, setError] = useState('');

  const { setToken } = useAuth();
  const navigate = useNavigate();

  const validateCredentials = async ({
    email,
    password,
  }: validateCredentials) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/users`);
      const users: UserProps[] = response.data; // Corrigido para o tipo correto
      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        setToken(user.id);
        setIsValidCredentials(true); // Usuário encontrado e credenciais válidas
        navigate('/kanban'); // Redirecionando após credenciais válidas
      } else {
        setIsValidCredentials(false); // Usuário não encontrado ou credenciais inválidas
      }
    } catch (error) {
      setError('Ocorreu um erro, desculpe pelo ocorrido!');
      console.log(error);
      setIsValidCredentials(false); // Caso de erro na requisição
    } finally {
      setIsLoading(false);
    }
  };

  return { validateCredentials, isLoading, isValidCredentials, error };
};
