type ProfileDataListItemProps = {
  label: string;
  input: string;
};

const ProfileDataListItem = ({ label, input }: ProfileDataListItemProps) => {
  return (
    <li className="flex gap-10">
      <h3 className="font-bold text-base opacity-50">{label}</h3>
      <p className="opacity-50 text-base">{input}</p>
    </li>
  );
};

export default ProfileDataListItem;
