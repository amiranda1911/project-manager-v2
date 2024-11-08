import FormButtons from "./FormButtons"
import React, { useState, useEffect } from 'react';
import { UserInfo } from "../types/FormTypes"

const validEmail = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;  
const validPassword = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;
const validName = /^[a-zA-Z]{2,}$/;
const validProfession = /^[a-zA-Z]{5,}$/;

const FormSignUp: React.FC = () => {
 
    // verifica dados no localStorage
    const [userInfo, setUserInfo] = useState<UserInfo>(() => {
        const storedData = localStorage.getItem('userInfo');
        return storedData ? JSON.parse(storedData) : { name:'', lastName:'', email:'', profession:'', password:''};
    });  

    const [err, setErr] = useState <{ name: string; lastName:string; email: string; profession: string; password: string;}>
        ({
            name: '',
            lastName: '',
            email: '',
            profession: '',
            password: '',        
        });

    // atualiza o localStorage
    useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }, [userInfo]);

    // validação
    const validate = (userInfo: UserInfo) => {
        let nameErr = '';
        let lastNameErr = '';
        let emailErr = '';
        let professionErr = '';
        let passwordErr = '';

        if (!validName.test(userInfo.name)) nameErr = 'Name must be at least 2 characters.';
        if (!validName.test(userInfo.lastName)) lastNameErr = 'Last name must be at least 2 characters.';
        if (!validEmail.test(userInfo.email)) emailErr = 'Please enter a valid email address.';
        if (!validProfession.test(userInfo.profession)) professionErr = 'Profession must be at least 5 characters.';
        if (!validPassword.test(userInfo.password)) passwordErr = 'Password is too weak.';

        setErr({ name: nameErr, lastName: lastNameErr, email: emailErr, profession: professionErr, password: passwordErr });

        return !nameErr && !lastNameErr && !emailErr && !professionErr && !passwordErr;
    };

    // atualiza o estado
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log('Campo:', name, 'Valor:', value); // para verificar o valor capturado, remover do código depois

        setUserInfo((prev) => ({...prev, [name]: value }));
    };
    
    //limpa os inputs do formulário depois de enviado
    //const clearForm = () => {
    //    setUserInfo({name:'', lastName:'', email:'', profession:'', password:''});
    //  };

    // função de envio
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validate(userInfo)) {
        alert('Formulário enviado!');
       // clearForm();
        } else {
        alert('Corrija os erros antes de enviar.');
        }
    };

    return (
    <>

    <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem] md:mt-[1.938rem]">
       
        <section className="md:flex md:flex-row md:gap-[1.125rem] md:max-w-[32.5rem]">
            <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
                <label htmlFor="name" className="font-roboto font-medium text-left text-14 text-[#331436]">First Name</label>
                <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your first name"
                value={userInfo.name}
                onChange={handleChange}
                className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
                 w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080]"                    
                />
                {err.name && <p style={{ color: 'red' }}>{err.name}</p>}
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
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.email && <p style={{ color: 'red' }}>{err.email}</p>}
        </div>

        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="profession" className="font-roboto font-medium text-left text-14 text-[#331436]">Job Position</label>                  
            <input
            type="text"
            id="profession"
            name="profession"
            placeholder="Enter your job position (example: Project Manager)"
            value={userInfo.profession}
            onChange={handleChange}
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] truncate border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.profession && <p style={{ color: 'red' }}>{err.profession}</p>}
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
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-auto h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.password && <p style={{ color: 'red' }}>{err.password}</p>}
        </div>

        <div className=" mt-[1.413rem] mb-[1.313rem] md:mt-[2rem] md:mb-[1.938rem]">
        <FormButtons buttonText="Create an account" />
        </div>

    </form>    
    </>
  )
}


export default FormSignUp