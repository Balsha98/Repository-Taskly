export default function NavigationBtnListItem({ viewID, activeView, onSwitchView, children }) {
    const handleSwitchView = (e) => onSwitchView(+e.target.dataset.viewId);

    return (
        <li className="page-navigation-btns-list-item">
            <button
                className={`${activeView === viewID ? "active-btn" : ""}`}
                onClick={handleSwitchView}
                data-view-id={viewID}
            >
                {children}
            </button>
        </li>
    );
}
