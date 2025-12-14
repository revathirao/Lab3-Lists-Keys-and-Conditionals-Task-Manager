import { useState } from "react";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";
import { TaskList } from "./components/TaskList/TaskList";
import type { Priority, Task, TaskStatus } from "./types";
import "./App.css";

/* Declares a state variable named tasks.
 setTasks is the function used to update tasks.
Initial state is an array of Task objects*/
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

   //Creates a state variable statusFilterCreates & priority filter
   const [statusFilter, setStatusFilter] = useState<TaskStatus | "">("");
   const [priorityFilter, setPriorityFilter] = useState<Priority | "">("");

   //Filtered tasks
   //Calculates a new array containing only the tasks that match filters.
   const filteredTasks = tasks.filter(function (t) {
      //If status is selected & task’s status is different exclude the task(same for Priority)
      if (statusFilter !== "" && t.status !== statusFilter) return false;
      if (priorityFilter !== "" && t.priority !== priorityFilter) return false;
      return true; //Keep the task passed the filter check
   });

   //function to delete a task by its id.
   //Creates a new array, excluding the deleted task.
   const handleDelete = (taskId: string) => {
      const newTasksList = tasks.filter((task) => {
         return task.id !== taskId; // keep only tasks that don't match the ID
      });
      setTasks(newTasksList); //Updates the tasks state & re-renders the UI without the deleted task
   };

   // Handlers
   //function to update a task's status (pending → completed
   const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
      //Loops through all tasks and updates only the one that matches taskId
      const newTasksList = tasks.map((task) =>
         task.id === taskId ? { ...task, status: newStatus } : task
      ); //return a new task object with the updated status or return unchanged task
      setTasks(newTasksList); //Saves the updated task list into state.
   };

   //function updates the status and Priority
   const handleFilterChange = (filters: any) => {
      setStatusFilter(filters.status ?? "");
      setPriorityFilter(filters.priority ?? "");
   };

   return (
      //statr rendering UI
      <div style={{ padding: "20px" }}>
         <h1>Task Manager</h1>

         {/* Renders the TaskFilter component. */}
         {/* Passes the filter change handler as a prop */}
         <TaskFilter onFilterChange={handleFilterChange} />
         {/* Passes the filter change handler as a prop */}
         <TaskList
            // function to change task status
            onStatusChange={handleStatusChange}
            tasks={filteredTasks} //filtered tasks display
            onDelete={handleDelete} //function to delete tasks
         />
      </div>
   );
}
