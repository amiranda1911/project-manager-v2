import FormButtons from "./FormButtons";
import React, { useState } from 'react';
import { UserInfo } from "../interface/FormTypes";
import { useCreateAccount } from '../hooks/useCreateAccount';
import { errorMessages } from '../constants/errorMessages'; 

const validName = /^[a-zA-Z]{2,}$/;
//lastName tem a mesma validação de firstName
const validEmail = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const validjobPosition = /^[a-zA-Z]{5,}$/;
const validPassword = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;

const FormSignUp: React.FC = () => {
    const { createAccount, loading, error } = useCreateAccount();

   // verifica dados
    const [userInfo, setUserInfo] = useState<UserInfo>({
            firstName: '',
            lastName: '',
            email: '',
            jobPosition: '',
            password: '',
    });

    const [err, setErr] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobPosition: '',
        password: '',
        formStatus: '',  // Estado para a mensagem de status
      });

    // validação
    const validate = (userInfo: UserInfo) => {
        let firstNameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let jobPositionErr = '';
        let passwordErr = '';

        if (!validName.test(userInfo.firstName)) firstNameErr = errorMessages.firstName;
        if (!validName.test(userInfo.lastName)) lastNameErr = errorMessages.lastName;
        if (!validEmail.test(userInfo.email)) emailErr = errorMessages.email;
        if (!validjobPosition.test(userInfo.jobPosition)) jobPositionErr = errorMessages.jobPosition;
        if (!validPassword.test(userInfo.password)) passwordErr = errorMessages.password;

        setErr({ firstName: firstNameErr, lastName: lastNameErr, email: emailErr, jobPosition: jobPositionErr, password: passwordErr, formStatus: '' });

        return !firstNameErr && !lastNameErr && !emailErr && !jobPositionErr && !passwordErr;
    };

    // atualiza os campos de entrada, o estado
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log('Campo:', name, 'Valor:', value); // para verificar o valor capturado, remover do código depois

        setUserInfo((prev) => ({...prev, [name]: value }));
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
      
        if (name === "firstName" && !validName.test(value)) {
          setErr((prevErr) => ({ ...prevErr, firstName: errorMessages.firstName }));
        }      
        if (name === "lastName" && !validName.test(value)) {
          setErr((prevErr) => ({ ...prevErr, lastName: errorMessages.lastName }));
        }      
        if (name === "email" && !validEmail.test(value)) {
          setErr((prevErr) => ({ ...prevErr, email: errorMessages.email }));
        }      
        if (name === "jobPosition" && !validjobPosition.test(value)) {
          setErr((prevErr) => ({ ...prevErr, jobPosition: errorMessages.jobPosition }));
        }      
        if (name === "password" && !validPassword.test(value)) {
          setErr((prevErr) => ({ ...prevErr, password: errorMessages.password }));
        }
    };
    
    // função de envio
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validate(userInfo)) {
            createAccount(userInfo);
            //Atualiza a mensagem de sucesso
            setErr((prevErr) => ({...prevErr, formStatus: errorMessages.formSuccess}));        
        } else {
            // Atualiza a mensagem de erro
            setErr((prevErr) => ({...prevErr, formStatus: errorMessages.formError}));
        }
    };

    return (
    <>

    <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem] md:mt-[1.938rem]">
       
        <section className="md:flex md:flex-row md:gap-[1.125rem] md:max-w-[32.5rem]">
            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                <label htmlFor="firstName" className="font-roboto font-medium text-left text-14 text-[#331436]">First Name</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"                 
                value={userInfo.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="on"     //autocompletar campos
                required
                className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                 w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080]"                    
                />
                {err.firstName && <p style={{ color: 'red' }}>{err.firstName}</p>}
            </div>

            <div className="flex flex-col mt-[1.5rem] w-[20.563rem] h-[3.75rem]">
                <label htmlFor="lastName" className="font-roboto font-medium text-left text-14 text-[#331436]">Last Name</label>                  
                <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                value={userInfo.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="on"     //autocompletar campos
                required
                className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080]"
                />
                {err.lastName && <p style={{ color: 'red' }}>{err.lastName}</p>}
            </div>
        </section>
       
        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="email" className="font-roboto font-medium text-left text-14 text-[#331436]">Email</label>                  
            <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={userInfo.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="on"     //autocompletar campos
            required
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.email && <p style={{ color: 'red' }}>{err.email}</p>}
        </div>

        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="jobPosition" className="font-roboto font-medium text-left text-14 text-[#331436]">Job Position</label>                  
            <input
            type="text"
            id="jobPosition"
            name="jobPosition"
            placeholder="Enter your job position (example: Project Manager)"
            value={userInfo.jobPosition}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="on"     //autocompletar campos
            required
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] truncate border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.jobPosition && <p style={{ color: 'red' }}>{err.jobPosition}</p>}
        </div>

        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="password" className="font-roboto font-medium text-left text-14 text-[#331436]">Password</label>                  
            <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={userInfo.password}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="on"     //autocompletar campos
            required
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.password && <p style={{ color: 'red' }}>{err.password}</p>}
        </div>

        {/* Exibe a mensagem de sucesso ou erro */}
        {err.formStatus && (
            <p style={{ color: err.formStatus === errorMessages.formSuccess ? 'green' : 'red' }}>
            {err.formStatus}
            </p>
        )}

        <div className=" mt-[1.413rem] mb-[1.313rem] md:mt-[2rem] md:mb-[1.938rem]">
        <FormButtons buttonText={loading ? 'Creating...' : 'Create Account'} loading={loading}/>
        </div>
        {error && <p>{error}</p>}
    </form>    
    </>
  )
}

export default FormSignUp