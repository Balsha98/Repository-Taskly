// IMPORTED COMPONENTS
import AddTaskPopup from "../../partials/popups/AddTaskPopup";
import NoTasksListSign from "../../partials/signs/NoTasksListSign";
import TaskDropdownList from "../../partials/lists/tasks/TasksDropdownList";
// IMPORTED STYLES
import "../../../../css/views/tasks/tasks-overview.css";
// IMPORTED ICONS
import iconPlusSrc from "../../../../media/icons/plus.svg";

export default function TasksOverview({ tasks }) {
    return (
        <>
            {/* <AddTaskPopup /> */}
            <div className="div-tasks-overview-container">
                <header>
                    <h2 className="heading-secondary">Tasks List Overview</h2>
                </header>
                <div className="div-tasks-overview-tasks-list-container">
                    {tasks.length ? <TaskDropdownList tasks={tasks} /> : <NoTasksListSign />}
                </div>
                <footer>
                    <button className="btn btn-primary">
                        <ion-icon src={iconPlusSrc}></ion-icon>
                        <span>Add New Task</span>
                    </button>
                    <p>Total: {tasks.length}</p>
                </footer>
            </div>
        </>
    );
}
