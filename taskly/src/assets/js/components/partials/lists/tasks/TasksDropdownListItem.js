export default function TaskDropdownListItem({ task, selectedTask, onSetSelectedTask }) {
    const handleSetSelectedTask = () => onSetSelectedTask(task);

    return (
        <li
            className={`tasks-overview-tasks-list-item ${task.id === selectedTask?.id ? "active-tasks-list-item" : ""}`}
            onClick={handleSetSelectedTask}
            data-task-id={task.id}
        >
            <div className="div-tasks-overview-tasks-list-item-data-container">
                <p>{task.title ?? "Title"}</p>
                <span>Created On: {task.date ?? "Date"}</span>
            </div>
            {task.resolved && (
                <span className="span-resolved-tasks-list-item">
                    <ion-icon src={""}></ion-icon>
                </span>
            )}
        </li>
    );
}
