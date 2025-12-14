import type { TaskItemProps, Priority, TaskStatus } from "../../types";

function getPriorityStyles(priority: Priority) {
   if (priority === "high") {
      return { color: "red" };
   }
   if (priority === "medium") {
      return { color: "orange" };
   }
   if (priority === "low") {
      return { color: "green" };
   }
   return {}; // default
}

function getStatusStyles(status: TaskStatus) {
   if (status === "pending") {
      return { backgroundColor: "yellow", color: "brown" };
   }
   if (status === "in-progress") {
      return { color: "blue" };
   }
   if (status === "completed") {
      return { color: "green" };
   }
   return {};
}

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
   return (
      <li className="task-item">
         <h3> {task.title}</h3>
         <p>{task.description}</p>

         <div className="task-actions">
            <select
               id="task-item-status"
               value={task.status}
               onChange={(e) => onStatusChange(task.id, e.target.value as any)}
               style={getStatusStyles(task.status)}>
               <option value="pending">Pending</option>
               <option value="in-progress">In Progress</option>
               <option value="completed">Completed</option>
            </select>

            <button className="delete-btn" onClick={() => onDelete(task.id)}>
               Delete
            </button>
         </div>

         <div className="task-priority-due">
            <p
               className="task-priority"
               style={getPriorityStyles(task.priority)}>
               Priority: {task.priority}
            </p>
         </div>
      </li>
   );
}
