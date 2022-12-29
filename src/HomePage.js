import {emptyUser, HeaderAndModals} from "./components/header/HeaderAndModals";
import Dashboard from "./home/dashboard/Dashboard";
import {Host} from "./BackEnd";
import {useEffect, useState} from "react";

export function HomePage() {
    const [user, setUser] = useState(emptyUser);
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

    function logIn(u, t) {
        setUser({name: u, token: t});
        localStorage.setItem(userStorageKey, JSON.stringify({user: u, token: t}));
    }
    function logOut() {
        localStorage.removeItem(userStorageKey)
        setUser(emptyUser)
    }

    useEffect(() => {
        let usr = localStorage.getItem(userStorageKey);
        if (usr !== null) {
            let userName = JSON.parse(localStorage.getItem(userStorageKey)).user;
            let token = JSON.parse(localStorage.getItem(userStorageKey)).token;
            setUser({name: userName, token: token});
        }
    }, [filter]);

    function filterBySearch({target}) {
        setFilter(target.value)
    }
    return <>
        <HeaderAndModals onLogin={logIn} user={user} handleLogout={logOut}
                         onSearch={filterBySearch} onPost={performFetch}/>
        <Dashboard filterString={filter} user={user} items={items} onDelete={performFetch}/>
    </>;
}

const userStorageKey = "user";