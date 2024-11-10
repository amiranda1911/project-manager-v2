import { useEffect, useState } from "react";
import axios from "axios";

import { EnableNotifications } from "../../Components/EnableNotifications";
import MainFooter from "../../Components/MainFooter";
import MainHeader from "../../Components/MainHeader";
import  UpdateSocialnformation  from "../../Components/UpdateSocialnformation";
import { UploadImage } from "../../Components/UploadImage";
import { UpdateInfos } from "../../Components/UpdateInfos";

import { UserData } from "./type";

const SettingsProfile = () => {
  const img = `https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  const [data, setData] = useState<UserData | null>(null);
  const [dataFixed, setFixedData] = useState<UserData | null>(null);
  const [isSumbit, setIsSubmit] = useState(false)

  
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/users/0768" );
        setData(response.data);
        setFixedData(response.data)
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchUserData();
  }, [isSumbit]);

  type Section = "notifications" | "socialMedia";
  type Key = keyof UserData["notifications"] | keyof UserData["socialMedia"] | "avatar"; // Tipo restrito para chaves dentro de 'notifications' ou 'socialMedia'

const updateInfosSettings = ( section: Section | null, key: Key, value: string | number | boolean): void => {
  setData((prevState) => {
    if (!prevState) {
      return null;
    }

    if (section === "notifications") {
      return {
        ...prevState,
        notifications: {
          ...prevState.notifications,
          [key]: value, // TypeScript reconhece 'key' como uma chave válida de 'notifications'
        },
      };
    } else if (section === "socialMedia") {
      return {
        ...prevState,
        socialMedia: {
          ...prevState.socialMedia,
          [key]: value,
        },
      };
    } else {
      return {
        ...prevState,
        [key]: value,
      };
    }
  });
};

  const handleSubmit = async () => {
    try {
      const response = await axios.patch("http://localhost:3000/users/0768", data);
      console.log("Dados atualizados com sucesso:", response.data);
      setIsSubmit(!isSumbit)
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };


  return (
    <div className=" text-sm/9 md:text-base/9  font-roboto">
      {/* HEADER*/}
      <MainHeader pageType={"page3"} />
      <main className="pt-20 pb-5 px-5  lg:p-24">
        <div className="my-5">
          <div className="flex items-center mb-9 w-full">
            <picture className="flex mr-4 md:mr-8">
              <img
                src={dataFixed?.avatar || img}
                alt="Imagem de perfil"
                className="w-29 h-30 min-w-29 rounded-full shadow-md md:w-45 md:h-46"
              />{" "}
              {/*shadow arrumar*/}
            </picture>
            <div>
              <h1 className="text-21 font-medium md:text-5xl">{dataFixed?.firstName}</h1>
              <p className="text-xl opacity-70 md:text-19">
              {dataFixed?.email}
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
          <div className="w-full min-w-90 lg:w-1/4 lg:min-w-96 mt-2">
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
          <div className="w-full min-w-90 lg:w-1/4 lg:min-w-96">
            <h2 className="text-2xl font-medium">Profile picture</h2>
            <p className="text-black-opacity-50">
              Update your profile picture. Supported files are JPG, PNG, WebP
              and JPEG.
            </p>
          </div>
          {/* Upload image profile*/}
         {data && <UploadImage updateInfosSettings={updateInfosSettings} data={data?.avatar} isSumbit={isSumbit}/>}

        </div>
        <hr className="my-4 lg:my-0" />
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="w-full min-w-90 lg:w-1/4 lg:min-w-96">
            <h2 className="text-2xl font-medium">Communication</h2>
            <p className="text-black-opacity-50">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
          </div>
          {data && <EnableNotifications updateInfosSettings={updateInfosSettings} data={data?.notifications} />}
        </div>
        <hr className="my-4 lg:my-0" />
        <div className="flex-col lg:flex-row flex lg:justify-between">
          <div className="w-full min-w-90 lg:w-1/4 lg:min-w-96">
            <h2 className="text-2xl font-medium ">Social information</h2>
            <p className="text-black-opacity-50">
              Update your e-mail communication preferences anytime. Choose to
              receive project notifications or disable them completely.
            </p>
          </div>
          {data && <UpdateSocialnformation updateInfosSettings={updateInfosSettings} data={data.socialMedia} />}
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
