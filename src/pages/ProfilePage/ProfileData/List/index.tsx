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
          <ProfileDataListItem label="User ID" input="000000000001" />
          <ProfileDataListItem
            label="Creation date"
            input="10/20/2024 09:00AM"
          />
          <ProfileDataListItem label="Title" input="Project Manager" />
        </ul>
      </div>
    </>
  );
};

export default ProfileDataList;
