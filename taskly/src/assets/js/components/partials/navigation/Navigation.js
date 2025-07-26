// IMPORTED COMPONENTS
import NavigationBtnList from "./NavigationBtnList";

export default function Navigation({ activeView, onSwitchView }) {
    return (
        <nav className="page-navigation">
            <NavigationBtnList activeView={activeView} onSwitchView={onSwitchView} />
        </nav>
    );
}
