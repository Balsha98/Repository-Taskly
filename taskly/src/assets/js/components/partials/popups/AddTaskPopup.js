// IMPORTED DEPENDENCIES
import { useRef } from "react";
// IMPORTED STYLES
import "../../../../css/partials/popups/popup-add-task.css";
// IMPORTED ICONS
import iconCloseSrc from "../../../../media/icons/x.svg";
import iconCheckSrc from "../../../../media/icons/check.svg";

export default function AddTaskPopup({ showAddTaskPopup, onShowAddTaskPopup, onUpdateTasks }) {
    const inputTaskTitle = useRef(null);
    const inputTaskDescription = useRef(null);

    function handleAddNewTask(e) {
        e.preventDefault();

        const taskTitle = inputTaskTitle.current.value;
        const taskDescription = inputTaskDescription.current.value;

        onUpdateTasks((tasks) => {
            const date = new Date();
            const formattedDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const formattedMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
            const formattedDate = `${formattedMonth}/${formattedDay}/${date.getFullYear()}`;

            const taskID = tasks.length ? +tasks[tasks.length - 1].id + 1 : 1;
            const newTask = { id: taskID, title: taskTitle, description: taskDescription, date: formattedDate };
            const updatedTasks = [...tasks, newTask];

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            return updatedTasks;
        });

        onShowAddTaskPopup();
    }

    return (
        <div className={`div-popup-add-task-container ${showAddTaskPopup && "show-popup"}`}>
            <div className="div-popup-add-task-modal">
                <button className="popup-btn-close btn-icon btn-danger" onClick={onShowAddTaskPopup} data-toggle="0">
                    <ion-icon src={iconCloseSrc}></ion-icon>
                </button>
                <form className="form-add-task" onSubmit={handleAddNewTask}>
                    <div className="div-input-container">
                        <label>Task Title</label>
                        <input
                            ref={inputTaskTitle}
                            id="task-title"
                            name="task-name"
                            type="text"
                            placeholder="Enter your title here..."
                        />
                    </div>
                    <div className="div-input-container">
                        <label>Task Description</label>
                        <textarea
                            ref={inputTaskDescription}
                            placeholder="Your description goes here..."
                            rows="8"
                        ></textarea>
                    </div>
                    <button className="btn btn-primary btn-confirm-task">
                        <ion-icon src={iconCheckSrc}></ion-icon>
                        <span>Confirm Task</span>
                    </button>
                </form>
            </div>
        </div>
    );
}
