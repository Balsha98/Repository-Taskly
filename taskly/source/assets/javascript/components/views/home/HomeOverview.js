// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED COMPONENTS
import AddTaskPopup from "../../partials/popups/AddTaskPopup";
import NotTasksListSign from "../../partials/signs/NoTasksListSign";
import HomeTasksList from "../../partials/lists/home/HomeTasksList";
import NoTaskSelectedSign from "../../partials/signs/NoTaskSelectedSign";
import HomeTaskDetails from "./HomeTaskDetails";
// IMPORTED STYLES
import "../../../../css/views/home/home-overview.css";
// IMPORTED ICONS
import iconPlusSrc from "../../../../media/icons/plus.svg";

export default function HomeOverviewGrid({ showAddTaskPopup, onShowAddTaskPopup, tasks, onUpdateTasks }) {
    const [selectedTask, setSelectedTask] = useState(null);

    return (
        <>
            <AddTaskPopup
                showAddTaskPopup={showAddTaskPopup}
                onShowAddTaskPopup={onShowAddTaskPopup}
                onUpdateTasks={onUpdateTasks}
            />
            <div className="div-home-overview-container">
                <div className="div-home-overview-sidebar">
                    <header>
                        <h2 className="heading-secondary">Tasks Overview</h2>
                    </header>
                    <div className="div-home-overview-sidebar-tasks-list-container">
                        {tasks.length ? (
                            <HomeTasksList
                                tasks={tasks}
                                selectedTask={selectedTask}
                                onSetSelectedTask={setSelectedTask}
                            />
                        ) : (
                            <NotTasksListSign />
                        )}
                    </div>
                    <footer>
                        <button className="btn btn-primary btn-add-task" onClick={onShowAddTaskPopup} data-toggle="1">
                            <ion-icon src={iconPlusSrc}></ion-icon>
                            <span>Add New Task</span>
                        </button>
                    </footer>
                </div>
                <div className="div-home-overview-details">
                    <header>
                        <h2 className="heading-secondary">Task Details</h2>
                    </header>
                    {selectedTask ? (
                        <HomeTaskDetails
                            selectedTask={selectedTask}
                            onSetSelectedTask={setSelectedTask}
                            onUpdateTasks={onUpdateTasks}
                        />
                    ) : (
                        <NoTaskSelectedSign />
                    )}
                </div>
            </div>
        </>
    );
}
