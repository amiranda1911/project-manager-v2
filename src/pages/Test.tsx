import React, { useState } from 'react';
import { useCreateAccount } from '../hooks/useCreateAccount';
interface CreateAccountProps {
  firstName: string;
  lastName: string;
  email: string;
  jobPosition: string;
  password: string;
}

const CreateAccountForm: React.FC = () => {
  const { createAccount, loading, error } = useCreateAccount();
  const [formData, setFormData] = useState<CreateAccountProps>({
    firstName: '',
    lastName: '',
    email: '',
    jobPosition: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createAccount(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="jobPosition"
        placeholder="Job Position"
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Account'}
      </button>

      {error && <p>{error}</p>}
    </form>
  );
};

export default CreateAccountForm;
