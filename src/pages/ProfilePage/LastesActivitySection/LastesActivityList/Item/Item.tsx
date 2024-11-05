const LatestActivityItem = () => {
  return (
    <>
      <li className="flex flex-row gap-[0.375rem] items-center ">
        <div className="max-w-[1.5625rem] max-h-[3.125rem] rounded-full lg:max-h-[3.125rem] lg:max-w-[3.125rem]">
          <img
            src="https://lh3.googleusercontent.com/a/ACg8ocIXSUajAyNe17Nh-lDnPbum7irqzJWRn9U45umN7gOZW5EwGpk=s576-c-no"
            alt=""
            className="max-w-[1.5625rem] max-h-[3.125rem] rounded-full lg:max-h-[3.125rem] lg:max-w-[3.125rem]"
          />
        </div>
        <p>
          <span className="font-medium text-sm lg:text-[1rem]">John Doe </span>
          <span className="font-medium text-sm opacity-50 lg:text-[1rem]">
            marked a task as done
          </span>
          <span className="font-medium text-sm lg:text-[1rem]">
            on Set 25, 2024
          </span>
        </p>
      </li>
    </>
  );
};

export default LatestActivityItem;
