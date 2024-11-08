interface UpdateInfosSettingsProps {
  updateInfosSettings: (section: string | null, key: string, value: string | number | boolean) => void;
}

export const UpdateInfos = ({updateInfosSettings}: UpdateInfosSettingsProps) => {

  const emailIsValid = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };
  const nameIsValid = (value: string) => {
    return value.length > 2;
  };
  const lastNameIsValid = (value: string) => {
    return value.length > 2;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        if (!nameIsValid(value)) {
          console.log("Please, enter a name with more than 2 characters.");
        } else {
          updateInfosSettings(null, name, value);
        }
        break;
      case "lastName":
        if (!lastNameIsValid(value)) {
          console.log("Please, enter a last name with more than 2 characters.");
        } else {
          updateInfosSettings(null, name, value);
        }
        break;
      case "email":
        if (!emailIsValid(value)) {
          console.log("Enter a valid email!");
        } else {
          updateInfosSettings(null, name, value);
        }
        break;
    }
  };

  return (
    <form
          action=""
          method="post"
          className="flex flex-col flex-wrap  mt-6 mb-10 leading-5 text-sm md:w-10/12 md:flex-row lg:mx-11 lg:w-3/6"
        >
          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="update-first-name"
              className="font-medium my-1.5 text-purple-850"
            >
              First name
            </label>
            <input
              type="text"
              id="update-first-name"
              name="firstName"
              className="p-2 border border-gray-300 rounded-md md:mr-5"
              placeholder="New first name"
              //pegar valor digitado pelo usuario
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col w-full md:w-1/2">
            <label
              htmlFor="update-last-name"
              className="font-medium my-1.5 text-purple-850"
            >
              Last name
            </label>
            <input
              type="text"
              id="update-last-name"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="New last name"
              //pegar valor digitado pelo usuario
              name="lastName"
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="flex flex-col w-full mt-3.5">
            <label
              htmlFor="update-email"
              className="font-medium my-1.5 text-purple-850"
            >
              E-mail
            </label>
            <input
              type="email"
              id="update-email"
              className="p-2 border border-gray-300 rounded-md"
              placeholder="New e-mail"
              name="email"
              //pegar valor digitado pelo usuario
              onChange={(e) => handleChange(e)}
            />
          </div>
        </form>
    )
  }

