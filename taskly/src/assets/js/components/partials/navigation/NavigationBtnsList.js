// IMPORTED COMPONENTS
import NavigationBtnListItem from "./NavigationBtnsListItem";

export default function NavigationBtnList({ activeView, onSwitchView }) {
    const navBtnLabels = ["Home", "Tasks", "Profile"];

    return (
        <ul className="page-navigation-btns-list">
            {navBtnLabels.map((label, i) => (
                <NavigationBtnListItem key={i} viewID={i + 1} activeView={activeView} onSwitchView={onSwitchView}>
                    {label}
                </NavigationBtnListItem>
            ))}
        </ul>
    );
}
