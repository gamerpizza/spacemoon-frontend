import './Dashboard.css'
import {Items} from "./Items";

function SideMenu() {
    return <aside className="Aside">
        <p>Side Menu</p>
    </aside>;
}

function Dashboard() {
    return <div className="Dashboard">
            <SideMenu/>
            <Items/>
    </div>;
}

export default Dashboard;