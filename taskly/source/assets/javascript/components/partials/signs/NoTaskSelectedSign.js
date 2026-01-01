// IMPORTED STYLES
import "../../../../css/partials/signs/sign-no-task-selected.css";
// IMPORTED ICONS
import iconAlertSrc from "../../../../media/icons/alert-circle.svg";

export default function NoTaskSelectedSign() {
    return (
        <div className="div-sign-no-task-selected-container">
            <ion-icon src={iconAlertSrc}></ion-icon>
            <header>
                <h2 className="heading-secondary">No Task Selected</h2>
                <p>
                    Select an existing <span>task</span> for review.
                </p>
            </header>
        </div>
    );
}
