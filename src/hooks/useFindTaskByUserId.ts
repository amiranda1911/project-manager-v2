import { useEffect, useState } from 'react';
import { TasksProps } from '../interface/Tasks';

const useFindTaskByUserId = (tasks: TasksProps[], id: string) => {
  const [filteredTasks, setFilteredTasks] = useState<TasksProps[]>([]);

  useEffect(() => {
    const result = tasks.filter((task) => task.members.includes(id));
    setFilteredTasks(result);
  }, [tasks, id]);

  return filteredTasks;
};

export default useFindTaskByUserId;
