interface UserFaceProps {
  fristName: string;
  lastName: string;
  userName: string;
  avata: string;
}

const UserFace = ({ fristName, lastName, userName, avata }: UserFaceProps) => {
  return (
    <div className="flex gap-6">
      <div className="max-w-[7.875rem] max-h-[8.125rem]">
        <img
          src={avata}
          alt=""
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
      <div className="flex flex-col justify-center content-center">
        <h2 className="font-medium text-3xl lg:text-5xl">
          {fristName} {lastName}
        </h2>
        <p className="text-2xl opacity-70 lg:text-2xl">{userName}</p>
      </div>
    </div>
  );
};

export default UserFace;
