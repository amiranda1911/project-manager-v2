import UserFace from './UserFace';
import ProfileData from './ProfileData';
import LastesActivitySection from './LastesActivitySection';
import WeeklyReport from './WeeklyReport';
import MainHeader from '../../Components/MainHeader';
import MainFooter from '../../Components/MainFooter';

const ProfilePage = () => {
  return (
    <div>
      <MainHeader pageType={"page3"} />
      <main className="my-12 mx-4 mx-w-[22.6875rem] rounded-3xl bg-[#F6F6F6] opacity-90 py-14 px-8 lg:flex lg:flex-row lg:content-center lg:py-14 lg:px-24 2xl:justify-center ">
        <div className="lg:max-w-[38.75rem] lg:pr-6 lg:w-[31.25rem]">
          <UserFace />
          <ProfileData />
        </div>
        <div className="lg:flex lg:flex-col lg:pt-32 lg:pl-4 lg:border-l-2 max-h-[68.75rem]">
          <LastesActivitySection />
          <WeeklyReport />
        </div>

      </main>
      <MainFooter />
    </div>
  );
};

export default ProfilePage;
