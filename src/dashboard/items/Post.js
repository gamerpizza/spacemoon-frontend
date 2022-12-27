import {useState} from "react";
import {Host} from "../../BackEnd";
import * as PropTypes from "prop-types";

export function Post({item = {author: "", caption: "", id: "", likes:[]}, userToken = "", userName=""}) {
    let startingLikes;
    let isLiked;

    if (item.likes !== null){
        startingLikes = Object.entries(item.likes).length
        isLiked = item.likes[userName]
    } else {
        isLiked = false;
        startingLikes = 0;
    }

    const [likes, setLikes] = useState(startingLikes)

    function addOrRemoveLike(action = ""){
        switch (action){
            case "add":
                setLikes(likes+1)
                break
            case "remove":
                setLikes(likes-1)
                break
            default:
        }
    }

    return <li>
        <button className={"PostAuthor"}>{item.author}</button>
        <PostMenu userToken={userToken} id={item.id}/>
        <span className={"PostCaption"}>{item.caption}</span>
        <PostButtons userToken={userToken} id={item.id} isLiked={isLiked} updateLikes={addOrRemoveLike}/> <span className={"PostLikes"}>{likes} likes</span>
    </li>;
}

Post.propTypes = {v: PropTypes.any};

function PostButtons({isLiked =  false, id = "", userToken = "", updateLikes = (action) => {}}) {
    const [liked, setLiked] = useState(isLiked);
    let bearerToken = "Bearer " + userToken
    let putLike = () => {
        fetch(Host + "/posts?id=" + id, {
            method: "PUT",
            headers: {"Authorization": bearerToken},
        }).then(r => {
            return r.json();
        }).then(r => {
            if (r) {
                updateLikes("add")
            } else {
                updateLikes("remove")
            }
            setLiked(r)
        });
    };

    function toggleLiked() {
        putLike()
    }

    return <>{userToken!==""?
        <div className={"PostButtons"}>
            <button className={"PostLikeButton"} type={"button"}
                    onClick={toggleLiked}>{liked ? <>⭐</> : <>⚝</>}</button>
        </div>:""}
    </>;
}

PostButtons.propTypes = {
    onClick: PropTypes.func,
    liked: PropTypes.bool
};

function PostMenu({userToken = "", id = ""}) {
    const [showPostMenu, setShowPostMenu] = useState(false);
    function toggle(){
        setShowPostMenu(!showPostMenu)
    }
    function erase(){
        fetch(Host + "/posts?id=" + id, {
            method: "DELETE",
        }).then(r => {});
    }
    return <>
        {userToken.trim() !== ""
            ?<div className={"PostMenu"}><button className={"Button White"} onClick={toggle}>...</button>
            {showPostMenu === true?<div><button className={"Button White"} onClick={erase}>DELETE</button></div>:""}</div>
        :""}
    </>;}
