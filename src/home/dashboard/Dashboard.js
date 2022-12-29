import {Items} from "./items/Items";


function Dashboard({filterString = "", user = {name:"", token:""}, items = {}, onDelete =()=>{}}) {
    return <div className="Dashboard">
            <Items filterString={filterString} user={user} items={items} onDelete={onDelete}/>
    </div>;
}

export default Dashboard;