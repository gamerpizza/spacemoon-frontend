import {HeaderAndModals} from "../components/header/HeaderAndModals";
import Dashboard from "../home/dashboard/Dashboard";
import {Host} from "../BackEnd";
import {useEffect, useState} from "react";

export function HomePage() {
    const [filter, setFilter] = useState("");
    const [items, setItems] = useState({});

    useEffect(function fetchPosts(){
        performFetch();
    }, [filter]);

    function performFetch() {
        fetch(Host + "/posts", {
            method: "GET",
        }).then(r => {
            return r.json();
        }).then(r => {
            setItems(r);
        });
    }

    function filterBySearch({target}) {
        setFilter(target.value)
    }
    return <>
        <HeaderAndModals onSearch={filterBySearch} onPost={performFetch}/>
        <Dashboard filterString={filter} items={items} onDelete={performFetch}/>
    </>;
}

