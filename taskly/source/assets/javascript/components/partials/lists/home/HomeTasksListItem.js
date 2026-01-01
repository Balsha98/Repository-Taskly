// IMPORTED ICONS
import iconCheckCircleSrc from "../../../../../media/icons/check-circle.svg";
import iconXCircleSrc from "../../../../../media/icons/x-circle.svg";

export default function HomeTasksListItem({ task, selectedTask, onSetSelectedTask }) {
    const handleSetSelectedTask = () => onSetSelectedTask(task);

    return (
        <li
            className={`home-overview-sidebar-tasks-list-item ${
                task.id === selectedTask?.id && "active-home-overview-tasks-list-item"
            } ${!task.resolved && "backtracked-home-overview-tasks-list-item"}`}
            onClick={handleSetSelectedTask}
            data-task-id={task.id}
        >
            <div className="div-home-overview-sidebar-tasks-list-item-data-container">
                <p className="line-clamp clamp-1">{task.title ?? "Title"}</p>
                <span>Created On: {task.dateFormatted ?? "Date"}</span>
            </div>
            {task.resolved ? (
                <span className="span-resolved-task">
                    <ion-icon src={iconCheckCircleSrc}></ion-icon>
                </span>
            ) : (
                <span className="span-backtracked-task">
                    <ion-icon src={iconXCircleSrc}></ion-icon>
                </span>
            )}
        </li>
    );
}
