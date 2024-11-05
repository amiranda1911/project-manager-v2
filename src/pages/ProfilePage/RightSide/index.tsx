import LastesActivitySection from '../LastesActivitySection';
import WeeklyReport from '../WeeklyReport';

const RightSide = () => {
  return (
    <div>
      <div className="md:flex md:flex-col md:pt-32  md:pl-4 md:border-l-2 max-h-[68.75rem]">
        <LastesActivitySection />
        <WeeklyReport />
      </div>
    </div>
  );
};

export default RightSide;
