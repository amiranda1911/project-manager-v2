import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const LoginTest = () => {
  const [localEmail, setEmail] = useState('');
  const [localPassword, setPassword] = useState('');
  const { validateCredentials, isValidCredentials, isLoading } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Passando os valores diretamente para a função validateCredentials
    validateCredentials({
      email: localEmail.toLowerCase().replace(/\s+/g, ''),
      password: localPassword.toLowerCase().replace(/\s+/g, ''),
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={localEmail}
          onChange={(e) => setEmail(e.target.value)}
        />
        {isValidCredentials === false && <p>Credenciais Inválidas</p>}
        <input
          type="password"
          placeholder="Senha"
          value={localPassword}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isValidCredentials === false && <p>Credenciais Inválidas</p>}

        {!isLoading ? (
          <button type="submit">Login</button>
        ) : (
          <p>Validando dados</p>
        )}
      </form>
    </div>
  );
};

export default LoginTest;
