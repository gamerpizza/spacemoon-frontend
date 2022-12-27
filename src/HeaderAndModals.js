import {useState} from "react";
import {LoginModal} from "./login/LoginModal";
import {AddPostModal} from "./addPost/AddPostModal";
import Header from "./header/Header";

export function HeaderAndModals({
                                    onLogin = (user, token) => {}, user = emptyUser,
                                    onSearch = ({target}) => {}, handleLogout = () => {}, onPost = () => {}
                                }) {
    const [loginIsShown, setLoginIsShown] = useState(false);
    const [newPostIsShown, setNewPostIsShown] = useState(false);

    function toggleLogin() {
        setLoginIsShown(!loginIsShown);
    }

    function toggleNewPost() {
        setNewPostIsShown(!newPostIsShown)
    }

    function logIn(u, t) {
        onLogin(u, t);
        toggleLogin();
    }


    return <>
        <LoginModal shown={loginIsShown} closeFunction={toggleLogin} onLogin={logIn}/>
        <AddPostModal shown={newPostIsShown} onClose={toggleNewPost} onPost={onPost} userToken={user.token}/>
        <Header user={user.name} token={user.token} handleLogin={toggleLogin}
                handleLogout={handleLogout}
                handleNewPost={toggleNewPost} onSearch={onSearch}
        />
    </>;
}

const emptyUserName = "";
const emptyUserToken = "";
export const emptyUser = {name: emptyUserName, token: emptyUserToken};