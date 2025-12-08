import { useState } from "react";
import TaskFilter from "./src/components/TaskFilter/TaskFilter";
import TaskList from "./src/components/TaskList/TaskList";
import "./App.css";

export default function App() {
   const [tasks, setTasks] = useState([
      {
         id: "1",
         title: "Task 1",
         description: "Description 1",
         status: "pending",
         priority: "low",
         dueDate: "2024-12-31",
      },
      {
         id: "2",
         title: "Task 2",
         description: "Description 2",
         status: "in-progress",
         priority: "medium",
         dueDate: "2024-12-30",
      },
   ]);

   return <></>;
}
