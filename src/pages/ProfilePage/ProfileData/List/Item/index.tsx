type ProfileDataListItemProps = {
  label: string;
  input: string;
};

const ProfileDataListItem = ({ label, input }: ProfileDataListItemProps) => {
  return (
    <li className="flex gap-10">
      <label className="font-bold text-base opacity-50 max-w-28 w-[6.8125rem]">
        {label}
      </label>
      <input
        type="text"
        readOnly
        className="opacity-50 text-base bg-transparent outline-0"
        value={input}
      ></input>
    </li>
  );
};

export default ProfileDataListItem;
