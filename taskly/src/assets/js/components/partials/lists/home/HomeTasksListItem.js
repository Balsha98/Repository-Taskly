// IMPORTED ICONS
import iconCheckCircleSrc from "../../../../../media/icons/check-circle.svg";

export default function HomeTasksListItem({ task, selectedTask, onSetSelectedTask }) {
    const handleSelectedTask = () => onSetSelectedTask(task);

    return (
        <li
            className={`home-overview-grid-sidebar-task-list-item ${
                task.id === selectedTask?.id ? "active-task-list-item" : ""
            }`}
            onClick={handleSelectedTask}
            data-task-id={task.id}
        >
            <div className="div-home-overview-grid-sidebar-task-list-item-data-container">
                <p>{task.title ?? "Title"}</p>
                <span>Created On: {task.date ?? "Date"}</span>
            </div>
            {task.resolved && (
                <span className="span-resolved-task-list-item">
                    <ion-icon src={iconCheckCircleSrc}></ion-icon>
                </span>
            )}
        </li>
    );
}
