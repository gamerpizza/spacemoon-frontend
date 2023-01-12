import {useContext, useState} from "react";
import {Host} from "../../../BackEnd";
import * as PropTypes from "prop-types";
import {UserContext} from "../../../AppContext";
import { useNavigate } from "react-router-dom";


function NewCommentModal({show = false,
                             post= {author: "", caption: "", id: ""}, onClose = () => {}}) {

    const [comment, setComment] = useState("")
    const {user} = useContext(UserContext)
    function postComment(e){
        e.preventDefault()

        let bearerToken = "Bearer " + user.token
        fetch(Host + "/comments?post=" + post.id, {method: "POST", headers:{"Authorization": bearerToken},body: comment}).then(r => {
            console.log(r)
            setComment("")
            onClose()
        })

    }
    function updateComment(e){
        setComment(e.target.value)
    }

    const sendEnabled = comment !== ""
    return <>{show
        ?<div className={"NewCommentModal"} onClick={(e)=>{e.stopPropagation();onClose()}}>
            <form onClick={(e) => {e.stopPropagation()}} onSubmit={postComment}>
                <h1>{post.author}</h1>
                <p>{post.caption}</p>
                <fieldset>
                    <label htmlFor="comment">⚡</label>
                    <textarea id={"comment"} name={"comment"} placeholder={"Add your comment"} onChange={updateComment} value={comment}/>
                </fieldset>
                <button type={"submit"} className={"Button Big"} disabled={!sendEnabled}>Send</button>
            </form>
        </div>
        :""}</>;
}

export function Post({item = {author: "", caption: "", id: "", likes:[]}, onDelete = () => {}}) {
    const [showCommentModal, setShowCommentModal] = useState(false)
    let startingLikes;
    let isLiked;
    const {user} = useContext(UserContext)

    if (item.likes !== null){
        startingLikes = Object.entries(item.likes).length
        isLiked = item.likes[user.user]
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

    function toggleCommentModal(){
        setShowCommentModal(!showCommentModal)
    }

    const navigate = useNavigate();
    return <li onClick={()=>{navigate("/post?id=" + item.id)}}>
        <a className={"PostAuthor"} href={"/user?id="+item.author} onClick={(e)=>{e.stopPropagation()}}>{item.author}</a>
        <PostMenu userToken={user.token} id={item.id} show={item.author === user.user} onDelete={onDelete}/>
        <span className={"PostCaption"}>{item.caption}</span>
        <PostButtons
            userToken={user.token} id={item.id} isLiked={isLiked} updateLikes={addOrRemoveLike} onComment={toggleCommentModal}/>
        <span className={"PostLikes"}>{likes} likes</span>
        <NewCommentModal post={item} show={showCommentModal} onClose={toggleCommentModal}></NewCommentModal>
    </li>;
}

Post.propTypes = {v: PropTypes.any};

function PostButtons({isLiked =  false,
                         id = "", userToken = "",
                         updateLikes = (action) => {}, onComment = () => {}}) {
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
        <div className={"PostButtons"} onClick={(e)=>{e.stopPropagation()}}>
            <button className={"PostCommentsButton"} type={"button"} onClick={onComment}>⚡</button>
            <button className={"PostLikeButton"} type={"button"}
                    onClick={toggleLiked}>{liked ? <>🦄</> : <>🫧</>}</button>
        </div>:""}
    </>;
}

PostButtons.propTypes = {
    onClick: PropTypes.func,
    liked: PropTypes.bool
};

function PostMenu({userToken = "", id = "", show = false, onDelete = () => {}}) {
    const [showPostMenu, setShowPostMenu] = useState(false);
    function toggle(){
        setShowPostMenu(!showPostMenu)
    }
    function erase(){
        let bearerToken = "Bearer " + userToken
        fetch(Host + "/posts?id=" + id, {
            method: "DELETE",
            headers: {"Authorization": bearerToken},
        }).then(r => {onDelete()});
    }
    return <>
        {userToken.trim() !== "" && show
            ?<div className={"PostMenu"}><button className={"Button White"} onClick={toggle}>...</button>
            {showPostMenu === true?<div><button className={"Button White"} onClick={erase}>DELETE</button></div>:""}</div>
        :""}
    </>;}
