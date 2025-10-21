// IMPORTED COMPONENTS
import HomeTaskListItem from "./HomeTasksListItem";

export default function HomeTasksList({ tasks, selectedTask, onSetSelectedTask }) {
    return (
        <ul className="home-overview-grid-sidebar-task-list">
            {tasks.map((task) => (
                <HomeTaskListItem
                    key={task.id}
                    task={task}
                    selectedTask={selectedTask}
                    onSetSelectedTask={onSetSelectedTask}
                />
            ))}
        </ul>
    );
}
