import './Dashboard.css'
import {useEffect, useState} from "react";
import {Host} from "../BackEnd";

function SideMenu() {
    return <aside className="Aside">
        <p>Side Menu</p>
    </aside>;
}

function Items() {
    const [items, setItems] = useState({});

    useEffect(() => {
        fetch(Host + "/posts", {
            method: "GET",
        }).then(r => {
            return r.json();
        }).then(r => {
            console.dir(r)
            setItems(r);
        });
    },[items]);

    return <main className="Main">
        <ul className="Items">
            {Object.entries(items).map(([k,v]) =>
                {return <li key={k}>
                    <span className={"PostAuthor"}>{v.author}</span>
                    <span className={"PostCaption"}>{v.caption}</span>
                </li>})
            }
        </ul>
    </main>;
}

function Dashboard() {
    return <div className="Dashboard">

            <SideMenu/>
            <Items/>


    </div>;
}

export default Dashboard;