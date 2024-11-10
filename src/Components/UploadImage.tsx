import { useState, useCallback } from 'react';
import { FaPaperclip } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { FiUpload } from 'react-icons/fi';
import axios from 'axios';
import { UserData } from "../pages/SettingsProfile/type";

type Section = "notifications" | "socialMedia";
type Key = keyof UserData["notifications"] | keyof UserData["socialMedia"] | "avatar";

interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: Section | null, key: Key, value: string | number | boolean) => void;
  data: string;
  isSumbit: boolean;
}

export const UploadImage = ({ updateInfosSettings, data, isSumbit }: UpdateInfosSettingsProps) => {
  const img = `https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  const [file, setFile] = useState<string>(data);
  const [fileName, setFileName] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [clear] = useState(data);

  const uploadToCloudinary = useCallback(async (selectedFile: File) => {
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('upload_preset', 'ml_unsigned'); // Substitua pelo nome do seu upload preset

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/djrr5vtxd/image/upload',
        formData
      );
      setFile(response.data.secure_url); // URL da imagem armazenada no Cloudinary
      setFileName(selectedFile.name);

      // Chama updateInfosSettings somente após o arquivo ser carregado
      updateInfosSettings(null, "avatar", response.data.secure_url);
    } catch (error) {
      console.error('Erro ao fazer upload para o Cloudinary:', error);
    } finally {
      setIsUploading(false);
    }
  }, [updateInfosSettings]);

  const clearImg = () => {
    setFile(clear);
    setFileName('');
    console.log(data);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size <= 5 * 1024 * 1024) { // Verifica se o tamanho do arquivo é menor ou igual a 5 MB
        uploadToCloudinary(selectedFile);
      } else {
        console.log("O arquivo deve ter no máximo 5 MB.");
      }
    }
  };
  
  const handleImageDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];
    if (selectedFile) {
      if (selectedFile.size <= 5 * 1024 * 1024) { // Verifica se o tamanho do arquivo é menor ou igual a 5 MB
        uploadToCloudinary(selectedFile);
      } else {
        console.log("O arquivo deve ter no máximo 5 MB.");
      }
    }
  };
  

  return (
    <div className="flex flex-col my-6 md:w-3/6 md:flex-row md:mx-11">
      <picture className="flex min-w-44 min-h-44 rounded-full mr-8 md:items-center md:justify-center ">
        <img
          src={file || img}
          alt="Imagem de perfil"
          className="rounded-full shadow-md object-cover w-45 h-46"
        />
      </picture>
      <div className="sm:w-full md:w-100">
        <p className="font-medium text-purple-850">Add new profile picture</p>

        {!isSumbit ? fileName ? (
          <div className="border border-blue-450 rounded-md p-1.5 flex items-center justify-between my-2 bg-blue-100 ">
            <span className="flex items-center">
              <FaPaperclip className="text-gray-400 h-[1.125rem] w-[1.125rem]" />
              <p className="mx-3">{fileName}</p>
            </span>
            <RiDeleteBin5Line className="text-slate-900 h-[1.125rem] w-[1.125rem]" onClick={() => clearImg()} />
          </div>
        ) : null
        : null} 
        
        <div
          className="border border-blue-450 border-dashed rounded-md h-38 text-center text-base text-gray-600 flex items-center flex-col justify-center w-full sm:w-100"
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleImageDrop}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            type="file"
            accept="image/*"
            hidden
            id="file-input"
            name="avatar"
            onChange={handleImageUpload}
          />

          {isUploading ? (
            <p>Carregando...</p>
          ) : (
            <>
              <FiUpload className="h-6 w-6 text-gray-500" />
              <p className="my-5">
                Drop here to attach or{' '}
                <span className="text-violet-dark">upload</span>
              </p>
              <span className="text-xs md:text-sm">Max size: 5MB</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
