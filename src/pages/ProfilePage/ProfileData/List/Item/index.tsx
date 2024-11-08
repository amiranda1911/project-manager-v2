type ProfileDataListItemProps = {
  label: string;
  input: string;
};

const ProfileDataListItem = ({ label, input }: ProfileDataListItemProps) => {
  return (
    <li className="grid grid-cols-[6.8125rem_1fr] gap-2">
      <label className="font-bold text-base opacity-50 max-w-28">{label}</label>
      <input
        type="text"
        readOnly
        className="opacity-50 text-base bg-transparent outline-0 w-full"
        value={input}
      />
    </li>
  );
};

export default ProfileDataListItem;
