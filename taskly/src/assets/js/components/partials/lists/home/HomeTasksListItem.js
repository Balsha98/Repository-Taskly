export default function HomeTasksListItem({ task, selectedTask, onSetSelectedTask }) {
    function handleSelectedTask() {
        onSetSelectedTask(task);
    }

    return (
        <li
            className={`home-overview-grid-sidebar-task-list-item ${
                task.id === selectedTask?.id ? "active-task-list-item" : ""
            }`}
            onClick={handleSelectedTask}
            data-task-id={task.id}
        >
            <p>{task.title ?? "Title"}</p>
            <span>Created On: {task.date ?? "Date"}</span>
        </li>
    );
}
