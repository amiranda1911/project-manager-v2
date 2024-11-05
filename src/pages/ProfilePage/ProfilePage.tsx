import LeftSide from './LeftSide';
import RightSide from './RightSide';

const ProfilePage = () => {
  return (
    <div>
      <div className="w-20">CABECA</div>
      <main className="my-12 mx-4 mx-w-[363px] rounded-3xl bg-[#F6F6F6] opacity-90 py-14 px-8 md:flex md:flex-row md:content-center md:py-14 md:px-24 ">
        <LeftSide />
        <RightSide />
      </main>
    </div>
  );
};

export default ProfilePage;
