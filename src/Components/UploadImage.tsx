import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiUpload } from "react-icons/fi";


export const UploadImage = () => {
  const img = `https://images.unsplash.com/photo-1728887823143-d92d2ebbb53a?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`;

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
    }
  };
  const dropImage = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const selectedFile = e.dataTransfer.files[0];

    if (selectedFile) {
      setFile(URL.createObjectURL(selectedFile));
      setFileName(selectedFile.name);
    }
  };
  return (
    <div className="flex flex-col  my-6 md:w-3/6 md:flex-row md:mx-11">
      <picture className="flex min-w-44 min-h-44rounded-full mr-8 md:items-center md:justify-center ">
        {/* Ajustar img de acordo com a foto do json depois fazer o upload e atualizar no json*/}
        <img
          src={file ? file : img}
          alt="Imagem de perfil"
          className="rounded-full shadow-md object-cover w-45 h-46"
        />
        {/*shadow arrumar*/}
      </picture>
      <div className="sm:w-full md:w-100">
        <p className="font-medium text-purple-850">Add new profile picture</p>

        { fileName ? 
            <div className="border border-blue-450 rounded-md p-1.5 flex items-center justify-between my-2 bg-blue-100 ">
              <span className="flex items-center">
              
                <FaPaperclip className="text-gray-400 h-[1.125rem] w-[1.125rem]"/>
                <p className="mx-3">{fileName}</p>
              </span>
              <RiDeleteBin5Line className="text-slate-900 h-[1.125rem] w-[1.125rem]" />
            </div> : null}

        <div
          className="border border-blue-450 border-dashed rounded-md h-38 text-center
                      text-base text-gray-600 flex items-center flex-col justify-center w-full sm:w-100"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => dropImage(e)}
          onClick={() => document.getElementById("file-input")?.click()}
        >
          <input
            type="file"
            accept="image/*"
            hidden
            id="file-input"
            onChange={(e) => uploadImage(e)}
          />
          
          <FiUpload className="h-6 w-6 text-gray-500"/>
          <p className="my-5">
            Drop here to attach or{" "}
            <span className="text-violet-dark">upload</span>
          </p>
          <span className="text-xs md:text-sm">Max size: 5GB</span>
        </div>
      </div>
    </div>
  );
};
