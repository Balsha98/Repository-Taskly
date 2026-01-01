// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED COMPONENTS
import Header from "./partials/Header";
import HomeOverview from "./views/home/HomeOverview";
import TasksOverview from "./views/tasks/TasksOverview";
// IMPORTED HELPERS
import { fetchAndDecode } from "../helpers/Encoder";
// IMPORTED STYLES
import "../../css/variables.css";
import "../../css/general.css";
import "../../css/reusable.css";

export default function App() {
    const [activeView, setActiveView] = useState(1);
    const [showAddTaskPopup, setShowAddTaskPopup] = useState(false);
    const [tasks, setTasks] = useState(() => {
        const tasks = fetchAndDecode("tasks") ?? [];

        // Sort tasks by date if there is at least 2 tasks.
        if (tasks.length && tasks.length > 1) tasks.sort((task1, task2) => task2.date - task1.date);

        return tasks;
    });

    const handleShowAddTaskPopup = (e) => {
        if (e) {
            const btnParent = e.target.closest("button");
            return setShowAddTaskPopup(+btnParent.dataset.toggle === 1);
        }

        setShowAddTaskPopup((value) => !value);
    };

    return (
        <>
            <Header activeView={activeView} onSwitchView={setActiveView} />
            {activeView === 1 ? (
                <HomeOverview
                    showAddTaskPopup={showAddTaskPopup}
                    onShowAddTaskPopup={handleShowAddTaskPopup}
                    tasks={tasks}
                    onUpdateTasks={setTasks}
                />
            ) : (
                <TasksOverview
                    showAddTaskPopup={showAddTaskPopup}
                    onShowAddTaskPopup={handleShowAddTaskPopup}
                    tasks={tasks}
                    onUpdateTasks={setTasks}
                />
            )}
        </>
    );
}
