// IMPORTED ICONS
import iconCheckCircleSrc from "../../../../../media/icons/check-circle.svg";
import iconXCircleSrc from "../../../../../media/icons/x-circle.svg";

export default function TaskDropdownListItem({ task }) {
    return (
        <li
            className={`tasks-overview-tasks-list-item ${
                !task.resolved && "backtracked-tasks-overview-tasks-list-item"
            }`}
        >
            <div className="div-tasks-overview-tasks-list-item-data-container">
                <p>{task.title ?? "Title"}</p>
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
