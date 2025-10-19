// IMPORTED STYLES
import "../../../../css/partials/signs/sign-no-tasks-list.css";
// IMPORTED ICONS
import iconAlertSrc from "../../../../media/icons/alert-circle.svg";

export default function NoTasksListSign() {
    return (
        <div className="div-sign-no-tasks-list-container">
            <ion-icon src={iconAlertSrc}></ion-icon>
            <header>
                <h2 className="heading-secondary">No Tasks Available</h2>
                <p>
                    Start adding <span>tasks</span> to the list.
                </p>
            </header>
        </div>
    );
}
