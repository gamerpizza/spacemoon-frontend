import {Items} from "./items/Items";
import {useContext} from "react";
import {UserContext} from "../../AppContext";


function Dashboard({filterString = "", items = {}, onDelete =()=>{}}) {
    const {user} = useContext(UserContext)
    return <div className="Dashboard">
            <Items filterString={filterString} user={user} items={items} onDelete={onDelete}/>
    </div>;
}

export default Dashboard;