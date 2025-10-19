export default function HomeTaskListItem({ taskID, taskTitle, taskDate }) {
    return (
        <li className="home-overview-grid-sidebar-task-list-item" data-task-id={taskID}>
            <p>{taskTitle ?? "Title"}</p>
            <span>{taskDate ?? "Date"}</span>
        </li>
    );
}
