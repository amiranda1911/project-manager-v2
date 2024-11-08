import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './useAuth';

import { baseUrl } from '../constants';

interface CreateAccountData {
  firstName: string;
  lastName: string;
  email: string;
  jobPosition: string;
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
        userName: `@${data.firstName}${data.lastName}`,
        creationDate: new Date().toISOString(),
        role: data.jobPosition,
        avatar: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        socialMedia: { twitter: '', instagram: '', linkedin: '' },
        notifications: {
          newTasks: false,
          newMembers: false,
          weeklyReports: false,
        },
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
