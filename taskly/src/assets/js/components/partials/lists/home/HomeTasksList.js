// IMPORTED COMPONENTS
import HomeTaskListItem from "./HomeTasksListItem";

export default function HomeTasksList({ tasks }) {
    return (
        <ul className="home-overview-grid-sidebar-task-list">
            {tasks.map((task) => (
                <HomeTaskListItem key={task.id} taskID={task.id} taskTitle={task.title} taskDate={task.date} />
            ))}
        </ul>
    );
}
