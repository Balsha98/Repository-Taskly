export default function HomeTasksListItem({ taskID, taskTitle, taskDate }) {
    return (
        <li className="home-overview-grid-sidebar-task-list-item" data-task-id={taskID}>
            <p>{taskTitle ?? "Title"}</p>
            <span>Created On: {taskDate ?? "Date"}</span>
        </li>
    );
}
