const UserFace = () => {
  return (
    <div className="flex gap-6">
      <div className="max-w-[7.875rem] max-h-[8.125rem]">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
          alt=""
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>
      <div className="flex flex-col justify-center content-center">
        <h2 className="font-medium text-3xl lg:text-5xl">John Doe</h2>
        <p className="text-2xl opacity-70 lg:text-2xl">@johnDoe</p>
      </div>
    </div>
  );
};

export default UserFace;
