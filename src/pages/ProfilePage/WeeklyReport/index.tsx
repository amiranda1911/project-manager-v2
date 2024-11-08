const WeeklyReport = () => {
  return (
    <section>
      <h2 className="font-medium text-2xl">Weekly report</h2>
      <p className="opacity-50 text-[0.9375rem]">Tasks estimate</p>
      <div className="flex flex-col mt-9">
        <div className="flex flex-row gap-14">
          <h2 className="font-medium text-base">Total tasks assigned</h2>
          <span className="font-bold text-base text-[#4F46E5]">30</span>
        </div>
        <div className="flex flex-row gap-14">
          <h2 className="font-medium text-base">Average work time</h2>
          <span className="font-bold text-base text-[#4F46E5]">15h 25min</span>
        </div>
      </div>
    </section>
  );
};

export default WeeklyReport;
