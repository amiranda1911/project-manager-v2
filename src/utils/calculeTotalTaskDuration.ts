import { TasksProps } from '../interface/Tasks';

export const calculeTotalTaskDuration = (tasks: TasksProps[]): string => {
  const totalMilliseconds = tasks.reduce((total, task) => {
    const taskDuration = task.end_datetime - task.start_datetime;
    return total + (taskDuration > 0 ? taskDuration : 0);
  }, 0);

  // Converter para unidades de tempo
  const totalMinutes = Math.floor(totalMilliseconds / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  // Formatar a string
  return `${days}d ${hours}h ${minutes}min`;
};
