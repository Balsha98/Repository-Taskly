// IMPORTED COMPONENTS
import NavigationBtnsList from "./NavigationBtnsList";

export default function Navigation({ activeView, onSwitchView }) {
    return (
        <nav className="page-navigation">
            <NavigationBtnsList activeView={activeView} onSwitchView={onSwitchView} />
        </nav>
    );
}
