import {useState} from "react";
import {PostImages} from "./PostImages";
import * as PropTypes from "prop-types";

export function Post({item}) {
    const [liked, setLiked] = useState(false)

    function toggleLiked() {
        setLiked(!liked)
    }

    return <li>
        <button className={"PostAuthor"}>{item.author}</button>
        <PostMenu/>
        <span className={"PostCaption"}>{item.caption}</span>
        <PostImages urls={item.urls}/>
        <PostButtons onClick={toggleLiked} liked={liked}/>

    </li>;
}

Post.propTypes = {v: PropTypes.any};

function PostButtons(props) {
    return <>
         <div className={"PostButtons"}>
            <button className={"PostLikeButton"} type={"button"}
                    onClick={props.onClick}>{props.liked ? <>🚀</> : <>🌑</>}</button>
        </div>
    </>
}


PostButtons.propTypes = {
    onClick: PropTypes.func,
    liked: PropTypes.bool
};

function PostMenu() {
    return <button className={"PostMenu"}>...</button>;
}
