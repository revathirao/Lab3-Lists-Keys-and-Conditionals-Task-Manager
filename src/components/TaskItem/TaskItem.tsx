import type { TaskItemProps } from "../../types";

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
   return (
      <li
         style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px 0",
         }}>
         <h3> {task.title}</h3>
         <p>{task.description}</p>
         <p>Status:{task.status}</p>
         <select
            value={task.status}
            onChange={(e) => onStatusChange(task.id, e.target.value as any)}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
         </select>

         <button onClick={() => onDelete(task.id)}>Delete</button>

         <p>Priority: {task.priority}</p>
         <p>Due: {task.dueDate}</p>
      </li>
   );
}
