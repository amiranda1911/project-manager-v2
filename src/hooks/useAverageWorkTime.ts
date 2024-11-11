import { useMemo } from 'react';
import { TasksProps } from '../interface/Tasks';

function useAverageWorkTime(tasks: TasksProps[]): number {
  return useMemo(() => {
    if (tasks.length === 0) return 0;

    const totalTime = tasks.reduce((sum, task) => {
      const timeSpent =
        (task.end_datetime - task.start_datetime) / (1000 * 60 * 60); // convert milliseconds to hours
      return sum + timeSpent;
    }, 0);

    return totalTime / tasks.length; // average time
  }, [tasks]);
}

export default useAverageWorkTime;
