import { useState } from "react";

export const UpdateSocialnformation = () => {

const [socialMedia, setSocialMedia] = useState({
    values: {
        x: 'sabrina',
        instagram: 'souza',
        linkedin: 'nada'
    }
})

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setSocialMedia({
      ...socialMedia,
      values: {
        ...socialMedia.values,
        [name]: value,
      },
    });
  };

console.log(socialMedia)

  return (
    <div className="w-3/6 my-6 lg:mx-10 lg:3/6">
      <span>Twitter/X</span>
      <div className="flex">
        <input
          type="text"
          placeholder="x.com/"
          className="w-52 h-12 border border-gray-300 rounded-md px-4"
          disabled={true}
        />
        <input
          type="text"
          name="x"
          className="border border-gray-300 rounded-md px-4  ml-1.5 w-36 h-12"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <span>Instagram</span>
      <div className="flex">
        <input
          type="text"
          placeholder="instagram.com/"
          className="w-52 h-12 border border-gray-300 rounded-md px-4"
          disabled={true}
        />
        <input
          type="text"
          name="instagram"
          className="border border-gray-300 rounded-md px-4 ml-1.5 w-36 h-12"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
      <span>Linkedin</span>
      <div className="flex">
        <input
          type="text"
          name="linkedin"
          placeholder="linkedin.com/in/"
          className="w-52 h-12 border border-gray-300 rounded-md px-4"
          disabled={true}
          
        />
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 ml-1.5 w-36 h-12"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};
