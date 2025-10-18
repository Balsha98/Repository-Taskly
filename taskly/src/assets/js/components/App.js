// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED COMPONENTS
import Header from "./partials/Header";
import OverviewGrid from "./views/home/HomeOverviewGrid";
// IMPORTED STYLES
import "../../css/variables.css";
import "../../css/general.css";
import "../../css/reusable.css";

export default function App() {
    const [activeView, setActiveView] = useState(1);
    const [showAddTaskPopup, setShowAddTaskPopup] = useState(false);

    const handleShowAddTaskPopup = (e) => {
        const btnParent = e.target.closest("button");
        setShowAddTaskPopup(+btnParent.dataset.toggle === 1);
    };

    return (
        <>
            <Header activeView={activeView} onSwitchView={setActiveView} />
            <OverviewGrid showAddTaskPopup={showAddTaskPopup} onShowAddTaskPopup={handleShowAddTaskPopup} />
        </>
    );
}
