import axios from "axios";
import { useState, useCallback } from "react";
import { FaPaperclip } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiUpload } from 'react-icons/fi';

interface ComponentProps {
  setImage: React.Dispatch<React.SetStateAction<string>>;
}

export const Uploader: React.FC<ComponentProps> = ({ setImage }) => {
  const [fileName, setFileName] = useState<string>('');
  const [isUploading, setIsUploading] = useState<boolean>(false);

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
      // URL da imagem armazenada no Cloudinary
      setFileName(selectedFile.name);
      setImage( response.data.secure_url)

    } catch (error) {
      console.error('Erro ao fazer upload para o Cloudinary:', error);
    } finally {
      setIsUploading(false);
    }
  }, [setImage]);

  const clearImg = () => {
    setFileName('');
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
      <div className=" w-full">
        { fileName ? 
            <div className="border border-blue-450 rounded-md p-1.5 flex items-center justify-between my-2 bg-blue-100 ">
              <span className="flex items-center">
                <FaPaperclip className="text-gray-400 h-[1.125rem] w-[1.125rem]"/>
                <p className="mx-3">{fileName}</p>
              </span>
              <RiDeleteBin5Line className="text-slate-900 h-[1.125rem] w-[1.125rem]" onClick={clearImg} />
            </div> : null}

        <div
          className="border border-blue-450 border-dashed rounded-md h-38 text-center
                      text-base text-gray-600 flex flex-col justify-center w-full items-center"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleImageDrop(e)}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            type="file"
            accept="image/*"
            hidden
            id="file-input"
            onChange={ handleImageUpload}
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
    
  );
};
