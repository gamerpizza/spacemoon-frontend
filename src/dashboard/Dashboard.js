import './Dashboard.css'
import {Items} from "./Items";

function SideMenu() {
    return <aside className="Aside">
        <p>Side Menu</p>
    </aside>;
}

function Dashboard({filterString}) {
    return <div className="Dashboard">
            <SideMenu/>
            <Items filterString={filterString}/>
    </div>;
}

export default Dashboard;