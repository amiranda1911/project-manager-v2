import LatestActivityItem from './Item/Item';
interface LastesActivityListProps {
  avata: string;
}

const LastesActivityList = ({ avata }: LastesActivityListProps) => {
  return (
    <div className="my-16 max-h-[34.0625rem] h-[34.0625rem] ">
      <ul className="flex gap-8 flex-col max-h-[41.625rem]">
        <LatestActivityItem avata={avata} />
        <LatestActivityItem avata={avata} />
        <LatestActivityItem avata={avata} />
        <LatestActivityItem avata={avata} />
        <LatestActivityItem avata={avata} />
        <LatestActivityItem avata={avata} />
      </ul>
    </div>
  );
};

export default LastesActivityList;
