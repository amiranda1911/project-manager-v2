import LatestActivityItem from './Item/Item';

const LastesActivityList = () => {
  return (
    <div className="my-16 max-h-[34.0625rem] h-[34.0625rem] ">
      <ul className="flex gap-8 flex-col max-h-[41.625rem]">
        <LatestActivityItem />
        <LatestActivityItem />
        <LatestActivityItem />
        <LatestActivityItem />
        <LatestActivityItem />
        <LatestActivityItem />
        <LatestActivityItem />
      </ul>
    </div>
  );
};

export default LastesActivityList;
