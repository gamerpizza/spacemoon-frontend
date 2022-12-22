import "./PostList.css"
import {PostImages} from "./PostImages";
import * as PropTypes from "prop-types";
import {useState} from "react";

export function PostList({items, filterString}) {
    return <ul className="Items PostList">
        {Object.entries(items)
            .filter(([k, item]) => {
                return item.author.toLowerCase().includes(filterString.toLowerCase())
                    || item.caption.toLowerCase().includes(filterString.toLowerCase())
            })
            .map(([k, item]) => {
                return <Post item={item} key={item.id}/>
            })
        }
    </ul>;
}

function PostMenu() {
    return <button className={"PostMenu"}>...</button>;
}

function Post({item}) {
    const [liked, setLiked] = useState(false)
    function toggleLiked(){setLiked(!liked)}

    return <li>
        <button className={"PostAuthor"}>{item.author}</button>
        <PostMenu/>
        <span className={"PostCaption"}>{item.caption}</span>
        <PostImages urls={item.urls}/>
        <div className={"PostButtons"}>
            <button type={"button"} className={"PostCommentsButton"}>👾</button>
            <button className={"PostLikeButton"} type={"button"} onClick={toggleLiked}>{liked?<>🌒</>:<>🌍</>}</button>
        </div>

    </li>;
}


PostList.propTypes = {
    items: PropTypes.shape({}),
    filterString: PropTypes.string,
};

Post.propTypes = {v: PropTypes.any};