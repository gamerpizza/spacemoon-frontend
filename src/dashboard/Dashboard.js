import {Items} from "./items/Items";

function SideMenu() {
    return <aside className="Aside">
        <ul>
            <li>
                <button
                className={"AsideButtonHome"}>Home</button>
            </li>
        </ul>
    </aside>;
}

function Dashboard({filterString = "", userToken="", userName=""}) {
    return <div className="Dashboard">
            <SideMenu/>
            <Items filterString={filterString} userToken={userToken} userName={userName}/>
    </div>;
}

export default Dashboard;