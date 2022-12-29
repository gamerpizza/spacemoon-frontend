import {useSearchParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Host} from "./BackEnd";
import Header from "./components/header/Header";
import {Profile} from "./profile/Profile";
import {emptyUser} from "./components/header/HeaderAndModals";

export function ProfilePage() {
    const [querySearchParams] = useSearchParams();
    const id = querySearchParams.get("id")
    const [profile, setProfile] = useState({id: "", user_name: "", motto: "", avatar: {url: ""}})
    const [user, setUser] = useState(emptyUser);

    const getProfile = useCallback(function () {
        fetch(Host + "/profile?id=" + id, {
            method: "GET",
        }).then(r => {
            return r.json();
        }).then(r => {
            setProfile(r)
        });
    }, [id])
    useEffect(function () {
        let usr = localStorage.getItem(userStorageKey);
        if (usr !== null) {
            let userName = JSON.parse(localStorage.getItem(userStorageKey)).user;
            let token = JSON.parse(localStorage.getItem(userStorageKey)).token;
            setUser({name: userName, token: token});
        }
        getProfile();

    }, [getProfile])



    function logOut() {
        localStorage.removeItem(userStorageKey)
        setUser(emptyUser)
    }

    return <>
        <Header user={user.name} token={user.token} hidePostButton={true} handleLogout={logOut}></Header>
        <div className={"UserProfile"}>
            {profile.id === undefined || profile.id.trim() === ""
                ? <p>ERROR</p>
                : <Profile id={profile.id} userName={profile.user_name} motto={profile.motto} url={profile.avatar.url}
                           currentUser={user.name} userToken={user.token} onUpdate={getProfile}/>
            }
        </div>
    </>;
}



const userStorageKey = "user";