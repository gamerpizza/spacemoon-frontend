import {useSearchParams} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Host} from "./BackEnd";
import {HeaderAndModals} from "./components/header/HeaderAndModals";
import {UserContext} from "./AppContext";

export function PostPage() {
    const [querySearchParams] = useSearchParams();
    const id = querySearchParams.get("id")
    const [postComments, setPostComments] = useState([])
    const [post, setPost] = useState({author: "", caption: "", id: "", likes: []})
    const [comment, setComment] = useState("")
    const {user} = useContext(UserContext)
    function fetchPostDetails() {
        fetch(Host + "/posts?post=" + id, {
                method: "GET",
            }
        ).then(r => r.json()).then(data => {
            setPost(data)
        })
        fetch(Host + "/comments?post=" + id).then(r => r.json()).then(data => {
            setPostComments(data.sort((a,b) => {
                if (a.post.created > b.post.created){
                    return -1
                }
                if (a.post.created < b.post.created){
                    return 1
                }
                return 0
            }))
        })
    }

    useEffect(fetchPostDetails, [id])

    const date = new Date(post.created)

    function postComment() {
        let bearerToken = "Bearer " + user.token
        fetch(Host + "/comments?post=" + post.id, {
            method: "POST",
            headers: {"Authorization": bearerToken},
            body: comment
        }).then(r => {
            setComment("")
            fetchPostDetails()
        })
    }

    return <>
        <HeaderAndModals/>
        <div className={"Post"}>
            <p className={"PostAuthor"}>{post.author}:</p>
            <p>{post.caption}</p>
            <p className={"PostDate"}>{date.toUTCString()}</p>
            <div className={"PostCommentInput"}>
                <input type="text" placeholder={"Add a comment"} onChange={(e) => {
                    setComment(e.target.value)
                }} value={comment}/>
                <button className={"Button Big"} onClick={postComment}>Comment</button>
            </div>

            <ul className={"PostCommentList"}>
                {postComments.map(comment => {
                    const commentDate = new Date(comment.post.created)
                    return <li key={comment.post.id} className={"PostComment"}>
                        <p className={"PostAuthor"}>{comment.post.author}:</p>
                        <p>{comment.post.caption}</p>
                        <p className={"PostDate"}>{commentDate.toUTCString()}</p>
                    </li>
                })}
            </ul>
        </div>

    </>;
}