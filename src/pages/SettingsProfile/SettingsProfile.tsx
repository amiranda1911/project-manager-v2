import { useEffect, useState } from "react";
import axios from "axios";

import { EnableNotifications } from "../../Components/EnableNotifications";
import MainFooter from "../../Components/MainFooter";
import MainHeader from "../../Components/MainHeader";
import { UpdateSocialnformation } from "../../Components/UpdateSocialnformation";
import { UploadImage } from "../../Components/UploadImage";
import { UpdateInfos } from "../../Components/UpdateInfos";

import { UserData } from "./type";

const SettingsProfile = () => {
  const img = `https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;
  
  const [data, setData] = useState(useState<UserData | null>(null));
  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/0768");
        setData(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchUserData();
  }, []);

  const updateInfosSettings = ( section:  keyof UserData | null, key: string, value: string | number | boolean): void => {
    setData((prevState) => {
      if (section) {
        return {
          ...prevState,
          [section]: {
            ...prevState![section as keyof UserData], // Mantém as outras chaves da seção
            [key]: value, // Atualiza a chave específica
          },
        };
      } else {
        // Se não for passada uma seção, atualiza diretamente o valor da chave
        return {
          ...prevState,
          [key]: value,
        };
      }
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.put("http://localhost:3000/users/0768", {data,});
      console.log("Dados atualizados com sucesso:", response.data);
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };

  console.log(data);

  return (
    <div className=" text-sm/9 md:text-base/9  font-roboto">
      {/* HEADER*/}
      <MainHeader pageType={"page3"} />
      <main className="p-5  lg:p-24">
        <div className="my-5">
          <div className="flex items-center mb-9 w-full">
            <picture className="flex mr-4 md:mr-8">
              <img
                src={img}
                alt="Imagem de perfil"
                className="w-29 h-30 min-w-29 rounded-full shadow-md md:w-45 md:h-46"
              />{" "}
              {/*shadow arrumar*/}
            </picture>
            <div>
              <h1 className="text-21 font-medium md:text-5xl">John Doe</h1>
              <p className="text-xl opacity-70 md:text-19">
                john.doe@example.com
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-20 font-medium">Project profile</h2>
            <p className="text-black-opacity-50">
              Update your profile information in the sections below.
            </p>
          </div>
        </div>
        <hr className="my-4 lg:my-0" />
        <div className="flex flex-col  lg:flex-row lg:justify-between">
          <div className="w-1/4 min-w-96 mt-2">
            <h2 className="text-2xl font-medium">Basic information</h2>
            <p className="text-black-opacity-50">
              Update your name and e-mail in this section. Note: this
              information will be public to all your project colleagues and can
              be changed anytime.
            </p>
          </div>
          {/*Update name, last name, email*/}
          <UpdateInfos updateInfosSettings={updateInfosSettings} />
        </div>
        <hr className="my-4 lg:my-0" />
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-1/4 min-w-96">
            <h2 className="text-2xl font-medium">Profile picture</h2>
            <p className="text-black-opacity-50">
              Update your profile picture. Supported files are JPG, PNG, WebP
              and JPEG.
            </p>
          </div>
          {/* Upload image profile*/}
          <UploadImage />
        </div>
        <hr className="my-4 lg:my-0" />
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-1/4 min-w-96">
            <h2 className="text-2xl font-medium">Communication</h2>
            <p className="text-black-opacity-50">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
          </div>
          <EnableNotifications updateInfosSettings={updateInfosSettings} />
        </div>
        <hr className="my-4 lg:my-0" />
        <div className="flex-col lg:flex-row flex lg:justify-between">
          <div className="w-1/4 min-w-96">
            <h2 className="text-2xl font-medium ">Social information</h2>
            <p className="text-black-opacity-50">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
          </div>
          <UpdateSocialnformation updateInfosSettings={updateInfosSettings} />
        </div>
        <div className="flex justify-center items-center mt-8 lg:mt-20">
          <button
            className="w-90 md:w-100 bg-primary-color-dark text-white rounded-lg h-12 "
            onClick={handleSubmit}
          >
            Update information
          </button>
        </div>
        <div className="text-center my-4">
          <p className="text-sm ">
            Never mind, take me{" "}
            <a href="/kanban" className="text-indigo-600 underline">
              back to my project.
            </a>
          </p>
        </div>
      </main>
      <MainFooter />
    </div>
  );
};

export default SettingsProfile;
