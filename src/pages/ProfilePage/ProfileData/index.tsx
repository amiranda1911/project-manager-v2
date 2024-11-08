import ProfileDatailContatc from './List';
interface ProfileDataProps {
  fristName: string;
  lastName: string;
  email: string;
  creationDate: string;
  jobPosition: string;
  id: string;
  socialMedia: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
}
const ProfileData = ({
  fristName,
  lastName,
  email,
  socialMedia,
  creationDate,
  id,
  jobPosition,
}: ProfileDataProps) => {
  return (
    <section>
      <div className="mt-[4.8125rem] border-b-2 pb-5 lg:mt-6 lg:max-w-lg">
        <h2 className="font-medium text-2xl lg:text-[2rem]">Profile data</h2>
        <p className="text-[1rem] opacity-50">
          {fristName} {lastName}’s information
        </p>
      </div>
      <ProfileDatailContatc
        email={email}
        socialMedia={socialMedia}
        creationDate={creationDate}
        id={id}
        jobPosition={jobPosition}
      />
    </section>
  );
};

export default ProfileData;
