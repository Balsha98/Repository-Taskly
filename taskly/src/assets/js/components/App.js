// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED COMPONENTS
import Header from "./partials/Header";
import HomeOverviewGrid from "./views/home/HomeOverviewGrid";
// IMPORTED STYLES
import "../../css/variables.css";
import "../../css/general.css";
import "../../css/reusable.css";

export default function App() {
    const [activeView, setActiveView] = useState(1);
    const [showAddTaskPopup, setShowAddTaskPopup] = useState(false);
    const [tasks, setTasks] = useState(() => localStorage.getItem("tasks"));

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
            <HomeOverviewGrid
                showAddTaskPopup={showAddTaskPopup}
                onShowAddTaskPopup={handleShowAddTaskPopup}
                tasks={tasks}
                onUpdateTasks={setTasks}
            />
        </>
    );
}
