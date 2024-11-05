import ProfileDatailContatc from '../ProfileDatailContatc';

const ProfileDate = () => {
  return (
    <>
      <div className="mt-[77px] border-b-2 pb-5 md:mt-6 md:max-w-lg">
        <h2 className="font-medium text-2xl md:text-[32px]">Profile data</h2>
        <p className="text-[16px] opacity-50">John Doe’s information</p>
      </div>
      <ProfileDatailContatc />
    </>
  );
};

export default ProfileDate;
