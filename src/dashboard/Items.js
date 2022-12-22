import {useEffect, useState} from "react";
import {Host} from "../BackEnd";
import * as PropTypes from "prop-types";

export function Items({filterString}) {
    const [items, setItems] = useState({});

    //Constantly reloading, should limit?
    useEffect(function fetchPosts(){
        if (Object.entries(items).length === 0) {
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
        <ul className="Items">
            {Object.entries(items)
                .filter(([k, item]) => {
                    return item.author.toLowerCase().includes(filterString.toLowerCase())
                        || item.caption.toLowerCase().includes(filterString.toLowerCase())
                })
                .map(([k, item]) => {
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
    const [shown, setShown] = useState(0)
    const images = []

    let imageUrls =  Object.entries(urls)
    function next(){
        if (shown + 1 >= imageUrls.length){
            setShown(0)
        } else {
            setShown(shown+1)
        }
    }

    for(const [url, ] of imageUrls){
        images.push(<img src={bucketAddress + url} alt={""} onClick={next}/>)
    }
    let totalImages = images.length


    return <>{totalImages>0?images[shown]:<></>}</>;
}

const bucketAddress = "https://storage.cloud.google.com/spacemoon-posted-media/"