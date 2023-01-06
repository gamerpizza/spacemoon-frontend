import {HeaderAndModals} from "../components/header/HeaderAndModals";
import Dashboard from "../home/dashboard/Dashboard";
import {Host} from "../BackEnd";
import {useEffect, useState} from "react";
import {AddPostModal} from "../home/addPost/AddPostModal";

export function HomePage() {
    const [filter, setFilter] = useState("");
    const [items, setItems] = useState({});
    const [newPostIsShown, setNewPostIsShown] = useState(false);

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

    function toggleNewPost() {
        setNewPostIsShown(!newPostIsShown)
    }

    return <>
        <AddPostModal shown={newPostIsShown} onClose={toggleNewPost}/>
        <HeaderAndModals onSearch={filterBySearch} onPost={performFetch}>
            <button className="Button White" onClick={toggleNewPost}>+</button>
        </HeaderAndModals>
        <Dashboard filterString={filter} items={items} onDelete={performFetch}/>
    </>;
}

