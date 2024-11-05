import LastesActivitySection from '../LastesActivitySection';
import WeeklyReport from '../WeeklyReport';

const RightSide = () => {
  return (
    <div>
      {/* Latest activity div  */}
      <div className="md:flex md:flex-col md:pt-32  md:pl-4 md:border-l-2 max-h-[1100px]">
        <LastesActivitySection />
        <WeeklyReport />
      </div>
    </div>
  );
};

export default RightSide;
