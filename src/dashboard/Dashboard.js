import {Items} from "./items/Items";


function Dashboard({filterString = "", userToken="", userName=""}) {
    return <div className="Dashboard">
            <Items filterString={filterString} userToken={userToken} userName={userName}/>
    </div>;
}

export default Dashboard;