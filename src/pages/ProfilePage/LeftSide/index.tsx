import UserFace from '../UserFace';
import ProfileDate from '../ProfileData';

const LeftSide = () => {
  return (
    <div className="md:max-w-[620px] md:pr-6 md:w-[500px]">
      <UserFace />
      <ProfileDate />
    </div>
  );
};

export default LeftSide;
