import ProfileDataListItem from './Item';
import useFormattedDate from '../../../../hooks/useFormatDate';

interface ProfileDataListProps {
  email: string;
  socialMedia: {
    twitter: string;
    instagram: string;
    linkedin: string;
  };
  creationDate: string;
  jobPosition: string;
  id: string;
}

const ProfileDataList = ({
  email,
  socialMedia,
  creationDate,
  id,
  jobPosition,
}: ProfileDataListProps) => {
  const { instagram, linkedin, twitter } = socialMedia;
  return (
    <>
      <div className="mt-2 lg:max-w-96">
        <h3 className="font-medium text-2xl ">Contact</h3>
        <ul className="flex flex-col gap-2 mt-4">
          <ProfileDataListItem input={email} label="E-mail" />
          <ProfileDataListItem input={twitter} label="Twitter/x" />
          <ProfileDataListItem input={instagram} label="Instagram" />
          <ProfileDataListItem input={linkedin} label="Linkedin" />
        </ul>
      </div>

      <div className="mt-[2.75rem] border-b-2 pb-5 lg:border-b-0 lg:max-w-96">
        <h3 className="font-medium text-2xl">Details</h3>
        <ul className="flex flex-col gap-2 mt-4">
          <ProfileDataListItem label="User ID" input={id} />
          <ProfileDataListItem
            label="Creation date"
            input={useFormattedDate(creationDate)}
          />
          <ProfileDataListItem label="Title" input={jobPosition} />
        </ul>
      </div>
    </>
  );
};

export default ProfileDataList;
