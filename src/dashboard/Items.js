import {useEffect, useState} from "react";
import {Host} from "../BackEnd";
import * as PropTypes from "prop-types";

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
    }, []);

    return <main className="Main">
        <ul className="Items">
            {Object.entries(items).map(([k, item]) => {
                return <Post item={item} key={item.id}/>
            })
            }
        </ul>
    </main>;
}

function Post({item}) {
    return <li>
        <button className={"PostAuthor"}>{item.author}</button>
        <span className={"PostCaption"}>{item.caption}</span>
        <PostImages urls={item.urls}/>
    </li>;
}

Post.propTypes = {v: PropTypes.any};

function PostImages({urls}) {
    const images = []
    console.dir(urls)
    for(const [url, ] of Object.entries(urls)){
        images.push(<img src={bucketAddress + url} alt={""}/>)
    }
    return images;
}

const bucketAddress = "https://storage.cloud.google.com/spacemoon-posted-media/"