// IMPORTED STYLES
import "../../../../css/views/home/overview-grid.css";
// IMPORTED ICONS
import plus from "../../../../media/icons/plus.svg";

export default function OverviewGrid() {
    return (
        <div className="div-overview-grid-container">
            <div className="div-overview-grid-sidebar">
                <header>
                    <h2 className="heading-secondary">Task Overview</h2>
                </header>
                <div className="div-overview-grid-sidebar-task-list-container">
                    <ul className="overview-grid-sidebar-task-list">
                        <li className="overview-grid-sidebar-task-list-item" data-task-id="">
                            <p>Title</p>
                            <span>Date</span>
                        </li>
                        <li className="overview-grid-sidebar-task-list-item" data-task-id="">
                            <p className="line-clamp clamp-1">Title</p>
                            <span>Date</span>
                        </li>
                    </ul>
                </div>
                <footer>
                    <button className="btn btn-primary btn-add-task">
                        <ion-icon src={plus}></ion-icon>
                        <span>Add New Task</span>
                    </button>
                </footer>
            </div>
            <div className="div-overview-grid-details">
                <header>
                    <h2 className="heading-secondary">Task Details</h2>
                </header>
            </div>
        </div>
    );
}
