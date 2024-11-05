import LatestActivity from '../LatestActivity/LatestActivity';

const LastesActivitySection = () => {
  return (
    <>
      <h2 className="font-medium text-2xl">Latest activity</h2>
      <p className="opacity-50 text-[15px]">John Doe’s last interactions</p>

      <div className="my-16 max-h-[545px] h-[545px] ">
        <ul className="flex gap-8 flex-col">
          <li className="flex flex-row gap-[6px] items-center ">
            <LatestActivity />
          </li>
          <li className="flex flex-row gap-[6px] items-center ">
            <LatestActivity />
          </li>
          <li className="flex flex-row gap-[6px] items-center ">
            <LatestActivity />
          </li>
          <li className="flex flex-row gap-[6px] items-center ">
            <LatestActivity />
          </li>
          <li className="flex flex-row gap-[6px] items-center ">
            <LatestActivity />
          </li>
          <li className="flex flex-row gap-[6px] items-center ">
            <LatestActivity />
          </li>
          <li className="flex flex-row gap-[6px] items-center ">
            <LatestActivity />
          </li>
        </ul>
      </div>
    </>
  );
};

export default LastesActivitySection;
