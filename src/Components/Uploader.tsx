import { useState } from "react";
import { FaPaperclip } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";


export const Uploader = () => {
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
      <div className=" w-full">
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
                      text-base text-gray-600 flex flex-col justify-center w-full"
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
          <p className="my-5">
            Drop here to attach or{" "}
            <span className="text-violet-dark">upload</span>
          </p>
          <span className="text-xs md:text-sm">Max size: 5GB</span>
        </div>
      </div>
    
  );
};
