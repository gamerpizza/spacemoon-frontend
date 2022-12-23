import { useState} from "react";
import {Host} from "../../BackEnd";
import * as PropTypes from "prop-types";

export function Post({item = {author: "", caption: "", id: "", likes:[]}, userToken = ""}) {
    const isLiked = item.likes === null ? false : item.likes[item.author]


    return <li>
        <button className={"PostAuthor"}>{item.author}</button>
        <PostMenu/>
        <span className={"PostCaption"}>{item.caption}</span>
        <PostButtons userToken={userToken} id={item.id} isLiked={isLiked}/>
    </li>;
}

Post.propTypes = {v: PropTypes.any};

function PostButtons({isLiked =  false, id = "", userToken = ""}) {
    const [liked, setLiked] = useState(isLiked);
    let bearerToken = "Bearer " + userToken
    let putLike = () => {
        fetch(Host + "/posts?id=" + id, {
            method: "PUT",
            headers: {"Authorization": bearerToken},
        }).then(r => {
            return r.json();
        }).then(r => {
            setLiked(r)
        });
    };

    function toggleLiked() {
        putLike()
    }

    return <>{userToken!==""?
        <div className={"PostButtons"}>
            <button className={"PostLikeButton"} type={"button"}
                    onClick={toggleLiked}>{liked ? <>🚀</> : <>✨</>}</button>
        </div>:""}
    </>;
}

PostButtons.propTypes = {
    onClick: PropTypes.func,
    liked: PropTypes.bool
};

function PostMenu() {
    return <button className={"PostMenu"}>...</button>;
}
