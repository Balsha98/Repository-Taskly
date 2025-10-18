// IMPORTED COMPONENTS
import AddTaskPopup from "../../partials/popups/AddTaskPopup";
// IMPORTED STYLES
import "../../../../css/views/home/home-overview-grid.css";
// IMPORTED ICONS
import plus from "../../../../media/icons/plus.svg";

export default function HomeOverviewGrid({ showAddTaskPopup, onShowAddTaskPopup }) {
    // useRef & useEffect

    return (
        <>
            <AddTaskPopup showAddTaskPopup={showAddTaskPopup} onShowAddTaskPopup={onShowAddTaskPopup} />
            <div className="div-home-overview-grid-container">
                <div className="div-home-overview-grid-sidebar">
                    <header>
                        <h2 className="heading-secondary">Task Overview</h2>
                    </header>
                    <div className="div-home-overview-grid-sidebar-task-list-container">
                        <ul className="home-overview-grid-sidebar-task-list">
                            <li className="home-overview-grid-sidebar-task-list-item" data-task-id="">
                                <p>Title</p>
                                <span>Date</span>
                            </li>
                        </ul>
                    </div>
                    <footer>
                        <button className="btn btn-primary btn-add-task" onClick={onShowAddTaskPopup} data-toggle="1">
                            <ion-icon src={plus}></ion-icon>
                            <span>Add New Task</span>
                        </button>
                    </footer>
                </div>
                <div className="div-home-overview-grid-details">
                    <header>
                        <h2 className="heading-secondary">Task Details</h2>
                    </header>
                </div>
            </div>
        </>
    );
}
