// IMPORTED DEPENDENCIES
import { useState } from "react";
// IMPORTED COMPONENTS
import Header from "./partials/Header";
import OverviewGrid from "./views/home/OverviewGrid";
// IMPORTED STYLES
import "../../css/variables.css";
import "../../css/general.css";
import "../../css/reusable.css";

export default function App() {
    const [activeView, setActiveView] = useState(1);

    return (
        <>
            <Header activeView={activeView} onSwitchView={setActiveView} />
            <OverviewGrid />
        </>
    );
}
