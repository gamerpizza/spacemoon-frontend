import {useSearchParams} from "react-router-dom";
import {useCallback, useEffect, useState} from "react";
import {Host} from "../BackEnd";
import Header from "../components/header/Header";
import {Profile} from "../profile/Profile";

export function ProfilePage() {
    const [querySearchParams] = useSearchParams();
    const id = querySearchParams.get("id")
    const [profile, setProfile] = useState({id: "", user_name: "", motto: "", avatar: {url: ""}})

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
        getProfile();

    }, [getProfile])


    return <>
        <Header hidePostButton={true}></Header>
        <div className={"UserProfile"}>
            {profile.id === undefined || profile.id.trim() === ""
                ? <p>Profile not loaded (yet?)</p>
                : <Profile id={profile.id} userName={profile.user_name} motto={profile.motto} url={profile.avatar.url} onUpdate={getProfile}/>
            }
        </div>
    </>;
}