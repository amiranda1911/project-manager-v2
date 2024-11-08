import FormButtons from "./FormButtons"
import React, { useState, useEffect } from 'react';
import { UserLogin } from "../types/FormTypes"

const validEmail = /^([a-z0-9_\.\+-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const validPassword = /(?=(.*[0-9]))(?=.*[!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/ ;

const FormLogin: React.FC = () => {

    // verifica dados no localStorage
    const [userInfo, setUserInfo] = useState<UserLogin>(() => {
      const storedData = localStorage.getItem('userLogin');
      return storedData ? JSON.parse(storedData) : {email:'', password:''};
  });  

  const [err, setErr] = useState <{email: string; password: string;}>
      ({          
          email: '',          
          password: '',        
      });

  // atualiza o localStorage
  useEffect(() => {
      localStorage.setItem('userInfo', JSON.stringify(userInfo));
  }, [userInfo]);

  // validação
  const validate = (userLogin: UserLogin) => {
      let emailErr = '';      
      let passwordErr = '';
      
      if (!validEmail.test(userLogin.email)) emailErr = 'Please enter a valid email address.';      
      if (!validPassword.test(userLogin.password)) passwordErr = 'Password is too weak.';

      setErr({email: emailErr, password: passwordErr});

      return !emailErr && !passwordErr;
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
      alert('Formulário enviado!');    //mudar alert para mensagem em tela
     // clearForm();
      } else {
      alert('Corrija os erros antes de enviar.');   //mudar alert par amensagem em tela
      }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="flex flex-col gap-[1.5rem]">  {/*onSubmit={handleSubmit} */}                        
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
            w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.email && <p style={{ color: 'red' }}>{err.email}</p>}
        </div>
        <div className="flex flex-col w-[20.563rem] h-[3.75rem]">
            <label htmlFor="Password" className="font-roboto font-medium text-left text-14 text-[#331436]">Password</label>                  
            <input 
            type="pasSword" 
            id="Password" 
            name="password"
            placeholder="Enter your password"
            value={userInfo.password}
            onChange={handleChange} 
            className="font-roboto font-normal text-14 text-[#00000080] p-[0.75rem]
            w-[20.563rem] h-[2.25rem] border border-[#0000001A] rounded-md focus:outline-none focus:ring-1 focus:ring-[#00000080] md:w-[32.5rem]"
            />
            {err.password && <p style={{ color: 'red' }}>{err.password}</p>}
        </div>
        <div className="mt-[2.938rem] mb-[2.5rem] md:mt-[2rem] md:mb-[1.938rem]">
        <FormButtons buttonText="Login" />
        </div>
    </form> 
    </>
  )
}

export default FormLogin