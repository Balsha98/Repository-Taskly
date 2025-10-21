// IMPORTED DEPENDENCIES
import { useEffect, useState } from "react";
// IMPORTED HELPERS
import { encodeAndSave } from "../../../helpers/Encoder";
// IMPORTED ICONS
import iconTrash2Src from "../../../../media/icons/trash-2.svg";
import iconEdit2Src from "../../../../media/icons/edit-2.svg";
import iconCloseSrc from "../../../../media/icons/x.svg";
import iconCheckSrc from "../../../../media/icons/check.svg";

export default function HomeTaskDetails({ selectedTask, onSetSelectedTask, onUpdateTasks }) {
    const [taskTitle, setTaskTitle] = useState(selectedTask.title);
    const [taskDescription, setTaskDescription] = useState(selectedTask.description);

    const handleTaskTitleChange = (e) => setTaskTitle(e.target.value);

    const handleTaskDescriptionChange = (e) => setTaskDescription(e.target.value);

    function handleDeleteTask() {
        onSetSelectedTask(null);

        onUpdateTasks((tasks) => {
            const filteredTasks = tasks.filter((task) => selectedTask.id !== task.id);

            encodeAndSave("tasks", filteredTasks);

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
                          id: selectedTask.id,
                          title: taskTitle,
                          description: taskDescription,
                          date: selectedTask.date,
                          resolved: selectedTask.resolved,
                      }
                    : task
            );

            encodeAndSave("tasks", updatedTasks);

            return updatedTasks;
        });
    }

    function handleResolveTask(e) {
        const isResolved = +e.target.dataset.resolved === 1;

        if (isResolved) onSetSelectedTask(null);
        else onSetSelectedTask((task) => ({ ...task, resolved: isResolved }));

        onUpdateTasks((tasks) => {
            const updatedTasks = tasks.map((task) =>
                selectedTask.id === task.id
                    ? {
                          ...selectedTask,
                          resolved: isResolved,
                      }
                    : task
            );

            encodeAndSave("tasks", updatedTasks);

            return updatedTasks;
        });
    }

    useEffect(() => {
        setTaskTitle(selectedTask.title);
        setTaskDescription(selectedTask.description);
    }, [selectedTask]);

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
            <div className="div-form-control-btns-container grid-3-columns">
                <button className="btn btn-danger" type="button" onClick={handleDeleteTask}>
                    <ion-icon src={iconTrash2Src}></ion-icon>
                    <span>Delete</span>
                </button>
                <button className="btn btn-warning" type="button" onClick={handleUpdateTask}>
                    <ion-icon src={iconEdit2Src}></ion-icon>
                    <span>Update</span>
                </button>
                {selectedTask.resolved ? (
                    <button className="btn btn-danger" type="button" onClick={handleResolveTask} data-resolved="0">
                        <ion-icon src={iconCloseSrc}></ion-icon>
                        <span>Backtrack</span>
                    </button>
                ) : (
                    <button className="btn btn-primary" type="button" onClick={handleResolveTask} data-resolved="1">
                        <ion-icon src={iconCheckSrc}></ion-icon>
                        <span>Resolve</span>
                    </button>
                )}
            </div>
        </form>
    );
}
