import {useEffect, useState} from "react";
import {Host} from "../BackEnd";
import {Items} from "../home/dashboard/items/Items";

export function Profile({
                            id = "", userName = "", motto = "", url = " ",
                            currentUser = "", userToken = "", onUpdate = () => {
    }
                        }) {
    const [edit, setEdit] = useState(false)
    const [items, setItems] = useState({});
    function toggleEdit() {
        setEdit(!edit)
    }

    function updateProfile(e) {
        e.preventDefault()
        const data = JSON.stringify(Object.fromEntries(new FormData(e.target)))
        let bearerToken = "Bearer " + userToken
        fetch(Host + "/profile?id=" + id, {
            method: "PUT",
            headers: {"Authorization": bearerToken},
            body: data,
        }).then(r => {
            console.log(r)
            setEdit(false)
            onUpdate()
        })
    }

    useEffect(performFetch, [id])
    function performFetch() {
        fetch(Host + "/posts", {
            method: "GET",
        }).then(r => {
            return r.json();
        }).then(r => {
            console.log(r)
            const newItems = {};
                Object.entries(r).forEach(([k,element])=>{
                    if(element.author === id){
                        newItems[k] = element
                    }
                });
            setItems(newItems);
        });
    }

    return <>
        {!edit
            ? <>
                <div className={"Profile"}>
                    <h1>@{id}</h1>
                    <h2>{userName}</h2>
                    {currentUser === id ?
                        <button className={"Button EditProfile"} onClick={toggleEdit}>Edit Profile</button> : ""}
                </div>
                <hr/>
                <Items items={items}/>
            </>
            : <div>
                <form className={"ProfileEditForm"} onSubmit={updateProfile}>
                    <h1>@{id}</h1>
                    <input type="text" defaultValue={userName} id={"ProfileUserName"} name={"user_name"}/>
                    <button className={"Button EditProfile"} type={"submit"}>Save</button>
                </form>
            </div>}</>;
}