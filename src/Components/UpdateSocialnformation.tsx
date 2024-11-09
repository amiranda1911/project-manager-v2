import { useState } from "react";

// Definindo as chaves possíveis de social media
type SocialMediaKey = "twitter" | "instagram" | "linkedin";

interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: "socialMedia" | null, key: SocialMediaKey, value: string) => void;
}

 const UpdateSocialInformation = ({ updateInfosSettings }: UpdateInfosSettingsProps) => {
  const [socialMedia, setSocialMedia] = useState({
    socialMedia: {
      x: "sabrina",
      instagram: "souza",
      linkedin: "nada",
    },
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSocialMedia({
      ...socialMedia,
      socialMedia: {
        ...socialMedia.socialMedia,
        [name]: value,
      },
    });

    // Garantindo que a chave name seja uma das chaves do tipo SocialMediaKey
    updateInfosSettings("socialMedia", name as SocialMediaKey, value);
  };

  return (
    <div className="w-3/6 my-6 lg:mx-10 lg:w-3/6">
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
          className="border border-gray-300 rounded-md px-4 ml-1.5 w-36 h-12"
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

export default UpdateSocialInformation