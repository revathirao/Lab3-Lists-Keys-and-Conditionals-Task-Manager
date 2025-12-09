//TaskList Component
export type TaskStatus = "pending" | "in-progress" | "completed";
export type Priority = "low" | "medium" | "high";

export interface Task {
   id: string;
   title: string;
   description: string;
   status: TaskStatus;
   priority: Priority;
   dueDate: string;
}

export interface TaskListProps {
   tasks: Task[];
   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
   onDelete: (taskId: string) => void;
}

//TaskItem Component

export interface TaskItemProps {
   task: Task;
   onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
   onDelete: (taskId: string) => void;
}

//TaskFilter Component
export interface TaskFilterProps {
   onFilterChange: (filters: {
      status?: TaskStatus;
      priority?: Priority;
   }) => void;
}
