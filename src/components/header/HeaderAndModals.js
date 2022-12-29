import {useState} from "react";
import {LoginModal} from "../../home/login/LoginModal";
import {AddPostModal} from "../../home/addPost/AddPostModal";
import Header from "./Header";
import * as PropTypes from "prop-types";

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

HeaderAndModals.propTypes = {
    onLogin: PropTypes.func,
    user: PropTypes.shape({name: PropTypes.string, token: PropTypes.string}),
    handleLogout: PropTypes.func,
    onSearch: PropTypes.func
};