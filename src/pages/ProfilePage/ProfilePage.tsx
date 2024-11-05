import UserFace from './UserFace';
import ProfileData from './ProfileData';
import LastesActivitySection from './LastesActivitySection';
import WeeklyReport from './WeeklyReport';

const ProfilePage = () => {
  return (
    <div>
      <div className="w-20">CABECA</div>
      <main className="my-12 mx-4 mx-w-[22.6875rem] rounded-3xl bg-[#F6F6F6] opacity-90 py-14 px-8 lg:flex lg:flex-row lg:content-center lg:py-14 lg:px-24 ">
        <div className="lg:max-w-[38.75rem] lg:pr-6 lg:w-[31.25rem]">
          <UserFace />
          <ProfileData />
        </div>
        <div className="lg:flex lg:flex-col lg:pt-32 lg:pl-4 lg:border-l-2 max-h-[68.75rem]">
          <LastesActivitySection />
          <WeeklyReport />
        </div>
      </main>
    </div>
  );
};

export default ProfilePage;
