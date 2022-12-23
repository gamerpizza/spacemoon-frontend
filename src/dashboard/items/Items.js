import {useEffect, useState} from "react";
import {Host} from "../../BackEnd";
import {PostList} from "./PostList";

export function Items({filterString = "", userToken = "", userName=""}) {
    const [items, setItems] = useState({});

    //Constantly reloading, should limit?
    useEffect(function fetchPosts(){
        if (items === {} || items === null || items === undefined || Object.entries(items).length === 0) {
            performFetch();
        } else {
            setTimeout(performFetch, 20000)
        }
        function performFetch() {
            fetch(Host + "/posts", {
                method: "GET",
            }).then(r => {
                return r.json();
            }).then(r => {
                setItems(r);
            });
        }
    }, [items, filterString]);

    return <main className="Main">
        <PostList items={items} filterString={filterString} userToken={userToken} userName={userName}/>
    </main>;
}


