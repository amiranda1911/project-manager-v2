import { useState, useEffect } from "react";
import { UserData } from "../pages/SettingsProfile/type";

// Definindo tipos no mesmo arquivo
type Section = "notifications" | "socialMedia"; // Tipo restrito para seções
type Key = keyof UserData["notifications"] | keyof UserData["socialMedia"]; // Tipo restrito para chaves

interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: Section | null, key: Key, value: string | number | boolean) => void;
  isSubmit: boolean
}

export const UpdateInfos = ({ updateInfosSettings, isSubmit }: UpdateInfosSettingsProps) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')

  const emailIsValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const nameIsValid = (value: string, name: string) => {
    console.log(value.length <= 2)
      if( value.length <= 2) {
        console.log(`Please, enter a ${name} with more than 2 characters.`)
        return false
      } else if ( !/^[A-Za-z]+$/.test(value)) {
        console.log(`Please, enter a ${name} that contains only letters.`)
        return false
      }else {
        return true
      }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(value)

    // Verificar se a chave 'name' é um valor válido para 'Key'
    if (["firstName", "lastName", "email"].includes(name)) {
      const key: Key = name as Key; // Afirmamos que 'name' será um valor válido para 'Key'

      switch (name) {
        case "firstName":     
          setName(value)

          if (nameIsValid(value, "name")) {
            updateInfosSettings(null, key, value)
          } 
          break;
        case "lastName":
          setLastName(value)
          if (nameIsValid(value, "last name")) {
            updateInfosSettings(null, key, value);
          }
          break;
        case "email":
          setEmail(value)
          if (!emailIsValid(value)) {
            console.log("Enter a valid email!");
          } else {
            updateInfosSettings(null, key, value); // Passando 'key' do tipo 'Key'
          }
          break;
      }
    }
  };

  useEffect(() => {
    if (isSubmit) {
      setName('');
      setLastName('')
      setEmail('')
    }
  }, [isSubmit]);

  return (
    <form className="flex flex-col flex-wrap mt-6 mb-10 leading-5 text-sm md:w-10/12 md:flex-row lg:mx-11 lg:w-3/6">
      <div className="flex flex-col w-full md:w-1/2">
        <label htmlFor="update-first-name" className="font-medium my-1.5 text-purple-850">
          First name
        </label>
        <input
          type="text"
          id="update-first-name"
          name="firstName"
          className="p-2 border border-gray-300 rounded-md md:mr-5"
          placeholder="New first name"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col w-full md:w-1/2">
        <label htmlFor="update-last-name" className="font-medium my-1.5 text-purple-850">
          Last name
        </label>
        <input
          type="text"
          id="update-last-name"
          name="lastName"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="New last name"
          value={lastName}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col w-full mt-3.5">
        <label htmlFor="update-email" className="font-medium my-1.5 text-purple-850">
          E-mail
        </label>
        <input
          type="email"
          id="update-email"
          name="email"
          className="p-2 border border-gray-300 rounded-md"
          placeholder="New e-mail"
          value={email}
          onChange={handleChange}
        />
      </div>
    </form>
  );
};
