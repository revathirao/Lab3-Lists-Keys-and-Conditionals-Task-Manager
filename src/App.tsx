import { useState } from "react";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";
import type { Priority, Task, TaskStatus } from "./types";

import "./App.css";

export default function App() {
   const [tasks, setTasks] = useState<Task[]>([
      {
         id: "1",
         title: "Task 1",
         description: "Description 1",
         status: "pending",
         priority: "low",
         dueDate: "2025-12-31",
      },
      {
         id: "2",
         title: "Task 2",
         description: "Description 2",
         status: "in-progress",
         priority: "medium",
         dueDate: "2025-12-30",
      },

      {
         id: "3",
         title: "Task 3",
         description: "Description 3",
         status: "completed",
         priority: "high",
         dueDate: "2025-12-29",
      },
   ]);

   const [statusFilter, setStatusFilter] = useState<TaskStatus | "">("");
   const [priorityFilter, setPriorityFilter] = useState<Priority | "">("");

   //  Filtered tasks

   const filteredTasks = tasks.filter(function (t) {
      if (statusFilter !== "" && t.status !== statusFilter) return false;
      if (priorityFilter !== "" && t.priority !== priorityFilter) return false;
      return true;
   });

   const handleDelete = (taskId: string) => {
      const newTasksList = tasks.filter((task) => {
         return task.id !== taskId; // keep only tasks that don't match the ID
      });

      setTasks(newTasksList);
   };

   // Handlers
   const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
      const newTasksList = tasks.map((task) =>
         task.id === taskId ? { ...task, status: newStatus } : task
      );
      setTasks(newTasksList);
   };

   const handleFilterChange = (filters: any) => {
      if (filters.status !== undefined) setStatusFilter(filters.status);
      if (filters.priority !== undefined) setPriorityFilter(filters.priority);
   };

   return (
      <div style={{ padding: "20px" }}>
         <h1>Task Manager</h1>
         <TaskFilter onFilterChange={handleFilterChange} />
         <TaskList
            onStatusChange={handleStatusChange}
            tasks={filteredTasks}
            onDelete={handleDelete}
         />
      </div>
   );
}
