import { TasksProps } from '../../../interface/Tasks';

interface WeeklyReportProps {
  averageWorkTime: string;
  userTasks: TasksProps[];
}

const WeeklyReport = ({ averageWorkTime, userTasks }: WeeklyReportProps) => {
  return (
    <section>
      <h2 className="font-medium text-2xl">Weekly report</h2>
      <p className="opacity-50 text-[0.9375rem]">Tasks estimate</p>
      <div className="grid grid-cols-2 mt-9 gap-x-14 gap-y-4">
        <h2 className="font-medium text-base">Total tasks assigned</h2>
        <span className="font-bold text-base text-[#4F46E5]">
          {userTasks.length}
        </span>

        <h2 className="font-medium text-base">Average work time</h2>
        <span className="font-bold text-base text-[#4F46E5]">
          {averageWorkTime}
        </span>
      </div>
    </section>
  );
};

export default WeeklyReport;
