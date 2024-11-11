interface LastesActivityListProps {
  avata: string;
}

const LatestActivityItem = ({ avata }: LastesActivityListProps) => {
  return (
    <>
      <li className="flex flex-row gap-[0.375rem] items-center ">
        <div className="max-w-[3.125rem] max-h-[3.125rem] rounded-full">
          <img
            src={avata}
            alt=""
            className="max-w-[3.125rem] max-h-[3.125rem] rounded-full"
          />
        </div>
        <p>
          <span className="font-medium text-sm lg:text-[1rem]">John Doe </span>
          <span className="font-medium text-sm opacity-50 lg:text-[1rem]">
            marked a task as done{' '}
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
