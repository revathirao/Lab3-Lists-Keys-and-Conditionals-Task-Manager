   import type { TaskFilterProps, TaskStatus, Priority } from "../../types";

   export function TaskFilter({ onFilterChange }: TaskFilterProps) {
      return (
         <div className="task-filter" style={{ marginBottom: "20px" }}>
            <label>
               Status:{""}
               <select
                  onChange={(e) =>
                     onFilterChange({
                        status:
                           e.target.value === ""
                              ? undefined
                              : (e.target.value as TaskStatus),
                     })
                  }>
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
               </select>
            </label>

            <label style={{ marginLeft: "20px" }}>
               Priority:{" "}
               <select
                  onChange={(e) =>
                     onFilterChange({
                        priority:
                           e.target.value === ""
                              ? undefined
                              : (e.target.value as Priority),
                     })
                  }>
                  <option value="">All Priorities</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
               </select>
            </label>
         </div>
      );
   }
