const ProfileDatailContatc = () => {
  return (
    <>
      <div className="flex gap-4 flex-col mt-2 md:max-w-96">
        <h2 className="font-medium text-2xl">Contact</h2>
        <ul className="flex justify-center content-center flex-col gap-2">
          <li className="flex justify-between">
            <h3 className="font-bold text-base opacity-50">E-mail</h3>
            <p className="opacity-50 text-base">john.doe@example.com</p>
          </li>
          <li className="flex justify-between">
            <h3 className="font-bold text-base opacity-50">Twitter/x</h3>
            <p className="opacity-50 text-base">@theJohnDoe</p>
          </li>
          <li className="flex justify-between">
            <h3 className="font-bold text-base opacity-50">Instagram</h3>
            <p className="opacity-50 text-base">@theJohnDoe</p>
          </li>
          <li className="flex justify-between">
            <h3 className="font-bold text-base opacity-50">Linkedin</h3>
            <p className="opacity-50 text-base">@theJohnDoe</p>
          </li>
        </ul>
      </div>

      <div className="mt-11 gap-4 border-b-2 pb-5 md:border-b-0 md:max-w-96">
        <h2 className="font-medium text-2xl">Details</h2>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between">
            <h3 className="font-bold text-base opacity-50">User ID</h3>
            <p className="opacity-50 text-base">000000000001</p>
          </li>
          <li className="flex justify-between">
            <h3 className="font-bold text-base opacity-50">Creation date</h3>
            <p className="opacity-50 text-base">10/20/2024 09:00AM</p>
          </li>
          <li className="flex justify-between">
            <h3 className="font-bold text-base opacity-50">Title</h3>
            <p className="opacity-50 text-base">Project Manager</p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileDatailContatc;
