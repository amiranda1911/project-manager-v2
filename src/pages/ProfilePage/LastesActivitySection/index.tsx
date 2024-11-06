import LastesActivityList from './LastesActivityList';

const LastesActivitySection = () => {
  return (
    <>
      <h2 className="font-medium text-2xl lg:text-[2rem]">Latest activity</h2>
      <p className="opacity-50 text-[0.9375rem] lg:text-[1rem]">
        John Doe’s last interactions
      </p>
      <LastesActivityList />
    </>
  );
};

export default LastesActivitySection;
