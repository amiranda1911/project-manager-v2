import { Priority } from "./EnumPriority";
import { Status } from "./EnumStatus";

export interface Task {
    id: number,
    owner_id: number,
    priority: Priority,
	status: Status,
    title: string,
    members: number[],
    commentsCount: number,
    completedTasksCount: number,
    progress: number,
    start_datetime: number,
    end_datetime: number,
    estimated_time: number,
    created_by: number
  }