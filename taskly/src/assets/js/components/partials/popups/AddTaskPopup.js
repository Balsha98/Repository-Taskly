// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED HELPERS
import { encodeAndSave } from "../../../helpers/Encoder";
// IMPORTED STYLES
import "../../../../css/partials/popups/popup-add-task.css";
// IMPORTED ICONS
import iconCloseSrc from "../../../../media/icons/x.svg";
import iconCheckSrc from "../../../../media/icons/check.svg";

export default function AddTaskPopup({ showAddTaskPopup, onShowAddTaskPopup, onUpdateTasks }) {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskDescription, setTaskDescription] = useState("");

    const handleTaskTitleChange = (e) => setTaskTitle(e.target.value);

    const handleTaskDescriptionChange = (e) => setTaskDescription(e.target.value);

    function handleAddNewTask(e) {
        e.preventDefault();

        if (!taskTitle) return;

        if (!taskDescription) return;

        onUpdateTasks((tasks) => {
            const date = new Date();
            const formattedDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
            const formattedMonth = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
            const formattedDate = `${formattedMonth}/${formattedDay}/${date.getFullYear()}`;

            const taskID = tasks.length ? +tasks[tasks.length - 1].id + 1 : 1;
            const newTask = {
                id: taskID,
                title: taskTitle,
                description: taskDescription,
                dateFormatted: formattedDate,
                date: date,
                resolved: false,
            };
            const updatedTasks = [...tasks, newTask];

            encodeAndSave("tasks", updatedTasks);

            return updatedTasks;
        });

        setTaskTitle("");
        setTaskDescription("");

        onShowAddTaskPopup();
    }

    return (
        <div className={`div-popup-add-task-container ${showAddTaskPopup && "toggle-popup"}`}>
            <div className="div-popup-add-task-modal">
                <button className="popup-btn-close btn-icon" onClick={onShowAddTaskPopup} data-toggle="0">
                    <ion-icon src={iconCloseSrc}></ion-icon>
                </button>
                <form className="form-add-task" onSubmit={handleAddNewTask}>
                    <div className={`div-input-container ${!taskTitle ? "invalid-input-container" : ""}`}>
                        <label htmlFor="task-title">Task Title</label>
                        <input
                            id="task-title"
                            name="task-name"
                            type="text"
                            placeholder="Enter your title here..."
                            value={taskTitle}
                            onChange={handleTaskTitleChange}
                        />
                    </div>
                    <div
                        className={`div-input-container div-textarea-container ${
                            !taskDescription ? "invalid-input-container" : ""
                        }`}
                    >
                        <label htmlFor="task-description">Task Description</label>
                        <textarea
                            id="task-description"
                            placeholder="Your description goes here..."
                            value={taskDescription}
                            onChange={handleTaskDescriptionChange}
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
