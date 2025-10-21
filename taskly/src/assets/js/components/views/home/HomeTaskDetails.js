// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED ICONS
import iconTrash2Src from "../../../../media/icons/trash-2.svg";
import iconEdit2Src from "../../../../media/icons/edit-2.svg";

export default function HomeTaskDetails({ selectedTask, onSetSelectedTask, onUpdateTasks }) {
    const [taskTitle, setTaskTitle] = useState(selectedTask.title);
    const [taskDescription, setTaskDescription] = useState(selectedTask.description);

    const handleTaskTitleChange = (e) => setTaskTitle(e.target.value);

    const handleTaskDescriptionChange = (e) => setTaskDescription(e.target.value);

    function handleDeleteTask() {
        onSetSelectedTask(null);

        onUpdateTasks((tasks) => {
            const filteredTasks = tasks.filter((task) => selectedTask.id !== task.id);

            localStorage.setItem("tasks", JSON.stringify(filteredTasks));

            return filteredTasks;
        });
    }

    function handleUpdateTask() {
        if (!taskTitle) return;

        if (!taskDescription) return;

        onUpdateTasks((tasks) => {
            const updatedTasks = tasks.map((task) =>
                selectedTask.id === task.id
                    ? {
                          id: task.id,
                          title: taskTitle,
                          description: taskDescription,
                          date: task.date,
                      }
                    : task
            );

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));

            return updatedTasks;
        });
    }

    return (
        <form className="form-edit-task">
            <div className={`div-input-container ${!taskTitle ? "invalid-input-container" : ""}`}>
                <label htmlFor="task-title">Task Title</label>
                <input
                    id="task-title"
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
            <div className="div-form-control-btns-container grid-2-columns">
                <button className="btn btn-danger" type="button" onClick={handleDeleteTask}>
                    <ion-icon src={iconTrash2Src}></ion-icon>
                    <span>Delete</span>
                </button>
                <button className="btn btn-primary" type="button" onClick={handleUpdateTask}>
                    <ion-icon src={iconEdit2Src}></ion-icon>
                    <span>Update</span>
                </button>
            </div>
        </form>
    );
}
