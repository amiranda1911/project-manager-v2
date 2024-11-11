import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect } from "react";
import { useSignIn, useUser } from "@clerk/clerk-react";
import axios from "axios";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  creationDate: string;
}

const LoginButtons: React.FC = () => {
  const { signIn, isLoaded } = useSignIn();
  const { isSignedIn, user } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/kanban",
    });
  };

  const handleFacebookLogin = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_facebook",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/kanban",
    });
  };

  const saveUserToDB = async (userData: UserData) => {
    try {      
      await axios.post("http://localhost:3000/save-user", userData);
      console.log("Usuário salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados do usuário:", error);
    }
  };

  useEffect(() => {
    if (isSignedIn && user) {
      console.log(user); // Verificar aqui

      const userData: UserData = {
        id: user.id,
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        email: user.emailAddresses[0]?.emailAddress || '',
        
        avatar: typeof user.publicMetadata?.profileImageUrl === 'string'
          ? user.publicMetadata.profileImageUrl
          : 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
        
        creationDate: user.createdAt ? new Date(user.createdAt).toISOString() : new Date().toISOString(),
      };

      saveUserToDB(userData);
    }
  }, [isSignedIn, user]);

  return (
    <div className="flex flex-row items-center justify-center gap-[0.813rem]">
      <button className="googleBtn" onClick={signInWithGoogle}>
        <FcGoogle />
      </button>
      <button className="facebookBtn" onClick={handleFacebookLogin}>
        <FaFacebook />
      </button>
    </div>
  );
};

export default LoginButtons;



{/* import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { useSignIn } from "@clerk/clerk-react";

// Botões de login para Google e Facebook
const LoginButtons: React.FC = () => {
  
  const { signIn, isLoaded } = useSignIn();
  // Certifica que o signIn foi carregado antes de usar
  if (!isLoaded) {
    console.log("loading...");
    return null
  }

  // Função para autenticação com o Google
  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",  // Estratégia de login com Google
      redirectUrl: "/sso-callback",  // A URL para onde o usuário será redirecionado após o login (configurada no Clerk)
      redirectUrlComplete: "/kanban"  // A URL para onde o usuário será redirecionado após o sucesso da autenticação
    });
  };

  // Função para autenticação com o Facebook
  const signInWithFacebook = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_facebook",  // Estratégia de login com Facebook
      redirectUrl: "/sso-callback",  // A URL para onde o usuário será redirecionado após o login (configurada no Clerk)
      redirectUrlComplete: "/kanban"  // A URL para onde o usuário será redirecionado após o sucesso da autenticação
    });
  };

  return (
    <div className="flex flex-row items-center justify-center gap-[0.813rem]">
      {/* Botão de login com Google 
      <button className="googleBtn" onClick={signInWithGoogle}>
      <FcGoogle />
      </button>

      {/* Botão de login com Facebook 
      <button className="facebookBtn" onClick={signInWithFacebook}>
        <FaFacebook />
      </button>
    </div>
  );
};

export default LoginButtons;  */}



{/*import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import React, { useEffect } from "react";
import { useSignIn, useUser } from "@clerk/clerk-react";
import axios from "axios";

interface UserData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
  creationDate: string;
}

const LoginButtons: React.FC = () => {
  const { signIn, isLoaded } = useSignIn();
  const { isSignedIn, user } = useUser();

  // Certifica que o signIn foi carregado antes de usar
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Função para autenticação com o Google
  const signInWithGoogle = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_google",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/kanban",
    });
  };

  // Função para autenticação com o Facebook
  const handleFacebookLogin = () => {
    signIn.authenticateWithRedirect({
      strategy: "oauth_facebook",
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/kanban",
    });
  };

  // Função para salvar os dados do usuário no db.json
  const saveUserToDB = async (userData) => {
    try {
      await axios.post("http://localhost:3001/save-user", userData);
      console.log("Usuário salvo com sucesso!");
    } catch (error) {
      console.error("Erro ao salvar os dados do usuário:", error);
    }
  };

  useEffect(() => {
    if (isSignedIn && user) {
      // Dados do usuário que serão salvos
      const userData = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.emailAddresses[0].emailAddress,
        avatar: user.profileImageUrl,
        creationDate: user.createdAt,
      };

      // Salva os dados do usuário no backend
      saveUserToDB(userData);
    }
  }, [isSignedIn, user]);

  return (
    <div className="flex flex-row items-center justify-center gap-[0.813rem]">
      <button className="googleBtn" onClick={signInWithGoogle}>
        <FcGoogle />
      </button>
      <button className="facebookBtn" onClick={handleFacebookLogin}>
        <FaFacebook />
      </button>
    </div>
  );
};

export default LoginButtons;
*/}



{/*
const BottomButtons = () => {
  return (
    <>
    <h3 className="font-roboto font-normal text-center text-14 text-[#331436] mb-[0.563rem]">or sign up with...</h3>
 

    <div className="flex flex-row items-center justify-center gap-[0.813rem]">
        <a href="/" 
        className="flex items-center justify-center border rounded-full border-[#3333334D] w-[6.875rem] h-[3.5rem] 
        text-[#0C82EE] text-23 cursor-pointer hover:border-#268FE4B3" > 
        <FaFacebook /> </a>
        <a href="/" 
        className="flex items-center justify-center border rounded-full border-[#3333334D] w-[6.875rem] h-[3.5rem] 
        text-23 cursor-pointer hover:border-#268FE4B3"> 
        <FcGoogle /> </a>
    </div>
    </>
  )
}

export default BottomButtons

*/}