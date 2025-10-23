// IMPORTED COMPONENTS
import TaskDropdownListItem from "./TasksDropdownListItem";

export default function TaskDropdownList({ tasks }) {
    return (
        <ul className="tasks-overview-tasks-list">
            {tasks.map((task) => (
                <TaskDropdownListItem key={task.id} task={task} />
            ))}
        </ul>
    );
}
