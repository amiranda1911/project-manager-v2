import FormButtons from './FormButtons';
import React, { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const FormLogin: React.FC = () => {
  const [localEmail, setEmail] = useState('');
  const [localPassword, setPassword] = useState('');
  const { validateCredentials, isValidCredentials, isLoading } = useLogin();

  // função de envio
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Passando os valores diretamente para a função validateCredentials
    validateCredentials({
      email: localEmail.toLowerCase().replace(/\s+/g, ''),
      password: localPassword,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem]">
        {' '}
        {/* */}
        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
          <label
            htmlFor="email"
            className="font-roboto font-medium text-left text-14 text-[#331436]"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={localEmail}
            onChange={(e) => setEmail(e.target.value)}
            //onBlur={handleBlur}
            autoComplete="on" //autocompletar campos
            required
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
          />
          {isValidCredentials === false && (
            <p className="font-roboto font-normal text-12 leading-4 text-[#BD2323] md:text-13 md:w-[32.5rem]">
              Invalid Credentials
            </p>
          )}
        </div>
        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
          <label
            htmlFor="password"
            className="font-roboto font-medium text-left text-14 text-[#331436]"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={localPassword}
            onChange={(e) => setPassword(e.target.value)}
            //onBlur={handleBlur}
            autoComplete="on" //autocompletar campos
            required
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
          />
          {isValidCredentials === false && (
            <p className="font-roboto font-normal text-12 leading-4 text-[#BD2323] md:text-13 md:w-[32.5rem]">
              Invalid Credentials
            </p>
          )}
        </div>
        <div className="mt-6 mb-[2.5rem] md:mt-[2rem] md:mb-[1.938rem]">
          {!isLoading ? (
            <FormButtons buttonText="Login" loading={isLoading} />
          ) : (
            <p>Validating data</p>
          )}
        </div>
      </form>
    </>
  );
};

export default FormLogin;
