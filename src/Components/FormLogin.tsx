import FormButtons from "./FormButtons"
import React, { useState } from 'react';
import { UserLogin } from "../interface/FormTypes"
import { useCreateAccount } from '../hooks/useCreateAccount';
import { errorMessages } from '../constants/errorMessages';

const validEmail = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const validPassword = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;

const FormLogin: React.FC = () => {

    const { createAccount, loading, error } = useCreateAccount(); 

    // verifica dados
    const [userLogin, setUserLogin] = useState<UserLogin>({
        email: '',        
        password: '',
    });


    const [err, setErr] = useState({          
            email: '',          
            password: '',
            statusLogin: '',   // Estado para a mensagem de status 
        });

    // validação
    const validate = (userLogin: UserLogin) => {
        let emailErr = '';      
        let passwordErr = '';
        
        if (!validEmail.test(userLogin.email)) emailErr = errorMessages.email;      
        if (!validPassword.test(userLogin.password)) passwordErr = errorMessages.password;

        setErr({email: emailErr, password: passwordErr, statusLogin: ''});

        return !emailErr && !passwordErr;
    };

    // atualiza os campos de entrada, o estado
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log('Campo:', name, 'Valor:', value); // para verificar o valor capturado, remover do código depois

        setUserLogin((prev) => ({...prev, [name]: value }));
    };

    //atualiza a validação quando o usuário sai do campo
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const { name, value } = e.target;      
           
        if (name === "email" && !validEmail.test(value)) {
          setErr((prevErr) => ({ ...prevErr, email: errorMessages.email }));
        }    
        if (name === "password" && !validPassword.test(value)) {
          setErr((prevErr) => ({ ...prevErr, password: errorMessages.password }));
        }
    };    

    //Ainda tem que rever esssa função
    {/*
        // interface temporária para testes
    interface CreateAccountData {   
        email: string;
        password: string;
    }

     // função de envio
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (validate(userLogin)) {
            createAccount(userLogin);             
            
            //Atualiza a mensagem de sucesso
            setErr((prevErr) => ({...prevErr, formStatus: errorMessages.formSuccess}));        
        } else {
            // Atualiza a mensagem de erro
            setErr((prevErr) => ({...prevErr, formStatus: errorMessages.formError}));
        }
    }; */} 

    return (
        <>
        <form  className="flex flex-col gap-[1.5rem]">   {/*onSubmit={handleSubmit} */}                     
            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                <label htmlFor="email" className="font-roboto font-medium text-left text-14 text-[#331436]">Email</label>                  
                <input 
                type="email" 
                id="email" 
                name="email"
                placeholder="Enter your email"
                value={userLogin.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="on"     //autocompletar campos
                required                
                className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
                />
                {err.email && <p className="font-roboto font-normal text-12 leading-4 text-[#BD2323] md:text-13 md:w-[32.5rem]">{err.email}</p>}
            </div>
            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                <label htmlFor="password" className="font-roboto font-medium text-left text-14 text-[#331436]">Password</label>                  
                <input 
                type="password" 
                id="password" 
                name="password"
                placeholder="Enter your password"
                value={userLogin.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="on"     //autocompletar campos
                required                
                className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
                />
                {err.password && <p className="font-roboto font-normal text-12 leading-4 text-[#BD2323] md:text-13 md:w-[32.5rem]">{err.password}</p>}
            </div>
            <div className="mt-[2.938rem] mb-[2.5rem] md:mt-[2rem] md:mb-[1.938rem]">
            <FormButtons buttonText={loading ? 'Logging in...' : 'Logged'} loading={loading}/>
            </div>
            {error && <p>{error}</p>}
        </form> 
        </>
  )
}

export default FormLogin