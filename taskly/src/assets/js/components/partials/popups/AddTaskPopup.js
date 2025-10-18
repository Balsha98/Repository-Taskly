// IMPORTED STYLES
import "../../../../css/partials/popup-add-task.css";
// IMPORTED ICONS
import close from "../../../../media/icons/x.svg";
import check from "../../../../media/icons/check.svg";

export default function AddTaskPopup({ showAddTaskPopup, onShowAddTaskPopup }) {
    return (
        <div className={`div-popup-add-task-container ${showAddTaskPopup && "show-popup"}`}>
            <div className="div-popup-add-task-modal">
                <button className="popup-btn-close btn-icon btn-danger" onClick={onShowAddTaskPopup} data-toggle="0">
                    <ion-icon src={close}></ion-icon>
                </button>
                <form className="form-add-task">
                    <div className="div-input-container">
                        <label>Task Title</label>
                        <input id="task-title" name="task-name" type="text" placeholder="Enter your title here..." />
                    </div>
                    <div className="div-input-container">
                        <label>Task Description</label>
                        <textarea rows="8" placeholder="Your description goes here..."></textarea>
                    </div>
                    <button className="btn btn-primary btn-confirm-task">
                        <ion-icon src={check}></ion-icon>
                        <span>Confirm Task</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
