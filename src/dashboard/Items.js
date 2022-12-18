import {useEffect, useState} from "react";
import {Host} from "../BackEnd";

export function Items() {
    const [items, setItems] = useState({});

    //Constantly reloading, should limit?
    useEffect(() => {
        fetch(Host + "/posts", {
            method: "GET",
        }).then(r => {
            return r.json();
        }).then(r => {
            console.dir(r)
            setItems(r);
        });
    }, [items]);

    return <main className="Main">
        <ul className="Items">
            {Object.entries(items).map(([k, v]) => {
                return <li key={k}>
                    <button className={"PostAuthor"}>{v.author}</button>
                    <span className={"PostCaption"}>{v.caption}</span>
                </li>
            })
            }
        </ul>
    </main>;
}