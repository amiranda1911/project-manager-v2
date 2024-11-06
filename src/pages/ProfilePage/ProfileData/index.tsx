import ProfileDatailContatc from './List';

const ProfileData = () => {
  return (
    <>
      <div className="mt-[4.8125rem] border-b-2 pb-5 lg:mt-6 lg:max-w-lg">
        <h2 className="font-medium text-2xl lg:text-[2rem]">Profile data</h2>
        <p className="text-[1rem] opacity-50">John Doe’s information</p>
      </div>
      <ProfileDatailContatc />
    </>
  );
};

export default ProfileData;
