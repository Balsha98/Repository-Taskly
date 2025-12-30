// IMPORTED COMPONENTS
import Logo from "./Logo";
import Navigation from "./navigation/Navigation";
// IMPORTED STYLES
import "../../../css/partials/header.css";

export default function Header({ activeView, onSwitchView }) {
    return (
        <header className="page-header">
            <Logo />
            <Navigation activeView={activeView} onSwitchView={onSwitchView} />
        </header>
    );
}
