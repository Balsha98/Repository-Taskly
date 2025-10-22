// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED COMPONENTS
import TaskDropdownListItem from "./TasksDropdownListItem";

export default function TaskDropdownList({ tasks }) {
    const [selectedTask, setSelectedTask] = useState(null);

    return (
        <ul className="tasks-overview-tasks-list">
            {tasks.map((task) => (
                <TaskDropdownListItem
                    key={task.id}
                    task={task}
                    selectedTask={selectedTask}
                    onSetSelectedTask={setSelectedTask}
                />
            ))}
        </ul>
    );
}
