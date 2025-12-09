# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
   globalIgnores(["dist"]),
   {
      files: ["**/*.{ts,tsx}"],
      extends: [
         // Other configs...

         // Remove tseslint.configs.recommended and replace with this
         tseslint.configs.recommendedTypeChecked,
         // Alternatively, use this for stricter rules
         tseslint.configs.strictTypeChecked,
         // Optionally, add this for stylistic rules
         tseslint.configs.stylisticTypeChecked,

         // Other configs...
      ],
      languageOptions: {
         parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
         },
         // other options...
      },
   },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
   globalIgnores(["dist"]),
   {
      files: ["**/*.{ts,tsx}"],
      extends: [
         // Other configs...
         // Enable lint rules for React
         reactX.configs["recommended-typescript"],
         // Enable lint rules for React DOM
         reactDom.configs.recommended,
      ],
      languageOptions: {
         parserOptions: {
            project: ["./tsconfig.node.json", "./tsconfig.app.json"],
            tsconfigRootDir: import.meta.dirname,
         },
         // other options...
      },
   },
]);
```

---

Explain how App.tsx state + filtering works

Explain how TaskList should render <ul> + <li>

Explain requirements for TaskFilter

Explain parent–child prop flow

Full working code for all components

Lab checklist to guarantee full credit

Tell me the number!

A full lab-ready explanation section
📌 A full write-up describing system design (for submission)=

Folder Structure
lab3-task-manager/
│ App.tsx
└─ src/
├─ types/
│ └── index.ts
├─ components/
├── TaskFilter/
│ └── TaskFilter.tsx
├── TaskList/
│ └── TaskList.tsx
└── TaskItem/
└── TaskItem.tsx

import type { TaskItemProps } from "../../types";

export default function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
return (

<li style={{ border: "1px solid gray", padding: "10px", margin: "10px 0" }}>
<h3>{task.title}</h3>
<p>{task.description}</p>

      <p>Status: {task.status}</p>

      <select
        value={task.status}
        onChange={(e) => onStatusChange(task.id, e.target.value as any)}
      >
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

---

<ul>
  {tasks.map(task => (
    <li key={task.id}>
      <TaskItem task={task} onStatusChange={...} onDelete={...} />
    </li>

    Complete Component Flow Summary (Perfect for Lab Report)
                                     ┌───────────────┐
                                     │    App.tsx     │
                                     │  (Holds state) │
                                     └───────┬────────┘
                 filter props & handlers    │   filtered tasks + handlers
                                             ▼
                            ┌─────────────────────────────┐
                            │         TaskFilter           │
                            │ (User picks filters UI only)│
                            └──────────────┬──────────────┘
                                           │ filter changes
                                           ▼
                                    App.tsx updates state
                                           │
                                           ▼
                            ┌─────────────────────────────┐
                            │          TaskList            │
                            │ (Renders <ul> + <li>)       │
                            └──────────────┬──────────────┘
                                           │ per-task props
                                           ▼
                            ┌─────────────────────────────┐
                            │           TaskItem           │
                            │ (Events: status, delete)    │
                            └─────────────────────────────┘
