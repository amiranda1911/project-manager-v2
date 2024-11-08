import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

import { baseUrl } from '../constants';

interface CreateAccountData {
  first_name: string;
  last_name: string;
  email: string;
  job_position: string;
  password: string;
  avatar?: string;
}

export const useCreateAccount = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const createAccount = async (data: CreateAccountData) => {
    setLoading(true);
    setError(null);

    try {
      const newUser = {
        ...data,
        username: `@${data.first_name}${data.last_name}`,
        creation_date: new Date().toISOString(),
        role: data.job_position,
        avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        social_media: { twitter: '', instagram: '', linkedin: '' },
      };

      const response = await axios.post(`${baseUrl}/users`, newUser);

      if (response.status === 201) {
        const token = response.data.id; // Exemplo: usando o ID como token
        setToken(token); // Armazena o token no localStorage
        navigate('/kanban'); // Redireciona para a página Kanban
      }
    } catch (err) {
      setError('Erro ao criar conta. Tente novamente.');
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return { createAccount, loading, error };
};
