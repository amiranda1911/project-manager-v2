import { useState } from "react";
interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: string | null, key: string, value: string | number | boolean) => void;
}

export const UpdateSocialnformation = ({updateInfosSettings}: UpdateInfosSettingsProps ) => {

const [socialMedia, setSocialMedia] = useState({
    socialMedia: {
        x: 'sabrina',
        instagram: 'souza',
        linkedin: 'nada'
    }
})

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
  
    setSocialMedia({
      ...socialMedia,
      socialMedia: {
        ...socialMedia.socialMedia,
        [name]: value,
      },
    });
    updateInfosSettings('socialMedia', name, value)
  };

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
          name="twitter"
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
          placeholder="linkedin.com/in/"
          className="w-52 h-12 border border-gray-300 rounded-md px-4"
          disabled={true}
          
        />
        <input
          type="text"
          name="linkedin"
          className="border border-gray-300 rounded-md px-4 ml-1.5 w-36 h-12"
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </div>
  );
};
