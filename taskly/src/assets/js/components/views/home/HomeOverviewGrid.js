// IMPORTED COMPONENTS
import AddTaskPopup from "../../partials/popups/AddTaskPopup";
import NoTaskListSign from "../../partials/signs/NoTaskListSign";
import HomeTaskList from "../../partials/lists/home/HomeTaskList";
import NoTaskSelectedSign from "../../partials/signs/NoTaskSelectedSign";
// IMPORTED STYLES
import "../../../../css/views/home/home-overview-grid.css";
// IMPORTED ICONS
import iconPlusSrc from "../../../../media/icons/plus.svg";

export default function HomeOverviewGrid({ showAddTaskPopup, onShowAddTaskPopup, tasks, onUpdateTasks }) {
    return (
        <>
            <AddTaskPopup
                showAddTaskPopup={showAddTaskPopup}
                onShowAddTaskPopup={onShowAddTaskPopup}
                onUpdateTasks={onUpdateTasks}
            />
            <div className="div-home-overview-grid-container">
                <div className="div-home-overview-grid-sidebar">
                    <header>
                        <h2 className="heading-secondary">Tasks Overview</h2>
                    </header>
                    <div className="div-home-overview-grid-sidebar-task-list-container">
                        {tasks ? <HomeTaskList tasks={tasks} /> : <NoTaskListSign />}
                    </div>
                    <footer>
                        <button className="btn btn-primary btn-add-task" onClick={onShowAddTaskPopup} data-toggle="1">
                            <ion-icon src={iconPlusSrc}></ion-icon>
                            <span>Add New Task</span>
                        </button>
                    </footer>
                </div>
                <div className="div-home-overview-grid-details">
                    <header>
                        <h2 className="heading-secondary">Task Details</h2>
                    </header>
                    <NoTaskSelectedSign />
                </div>
            </div>
        </>
    );
}
