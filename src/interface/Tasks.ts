export interface TasksProps {
  id: string;
  owner_id: string;
  priority: number;
  status: number;
  title: string;
  members: string[];
  commentsCount: number;
  completedTasksCount: number;
  progress: number;
  start_datetime: number; // timestamp in milliseconds
  end_datetime: number; // timestamp in milliseconds
  estimated_time: number;
}
