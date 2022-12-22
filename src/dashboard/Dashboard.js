import './Dashboard.css'
import {Items} from "./items/Items";

function SideMenu() {
    return <aside className="Aside">
        <ul>
            <li>
                <button>Liked Posts</button>
            </li>
        </ul>
    </aside>;
}

function Dashboard({filterString}) {
    return <div className="Dashboard">
            <SideMenu/>
            <Items filterString={filterString}/>
    </div>;
}

export default Dashboard;