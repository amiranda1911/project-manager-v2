import { useState } from 'react';
import { TasksProps } from '../interface/Tasks';

const useFindTaskByUserId = (tasks: TasksProps[], id: string) => {
  const [filterTasks, setFilterTasks] = useState<TasksProps[]>([]);

  tasks.forEach((task) => {
    const isMember = task.members.includes(id);
    if (isMember) {
      setFilterTasks((prevTasks) => [...prevTasks, task]);
    }
  });

  return filterTasks;
};

export default useFindTaskByUserId;
