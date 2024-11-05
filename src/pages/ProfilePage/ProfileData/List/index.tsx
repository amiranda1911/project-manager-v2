import ProfileDataListItem from './Item';

const ProfileDataList = () => {
  return (
    <>
      <div className="flex gap-4 flex-col mt-2 lg:max-w-96">
        <h2 className="font-medium text-2xl">Contact</h2>
        <ul className="flex justify-center content-center flex-col gap-2">
          <ProfileDataListItem input="john.doe@example.com" label="E-mail" />
          <ProfileDataListItem input="@theJohnDoe" label="Twitter/x" />
          <ProfileDataListItem input="@theJohnDoe" label="Instagram" />
          <ProfileDataListItem input="@theJohnDoe" label="Linkedin" />
        </ul>
      </div>

      <div className="mt-[2.75rem] gap-4 border-b-2 pb-5 lg:border-b-0 lg:max-w-96">
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

export default ProfileDataList;
