import {useContext, useState} from "react";
import {LoginModal} from "../../home/login/LoginModal";
import {AddPostModal} from "../../home/addPost/AddPostModal";
import Header from "./Header";
import * as PropTypes from "prop-types";
import {UserContext} from "../../AppContext";

export function HeaderAndModals({onSearch = ({target}) => {}, onPost = () => {}}) {
    const context = useContext(UserContext)
    const [loginIsShown, setLoginIsShown] = useState(false);
    const [newPostIsShown, setNewPostIsShown] = useState(false);

    function toggleLoginModal() {
        setLoginIsShown(!loginIsShown);
    }

    function toggleNewPost() {
        setNewPostIsShown(!newPostIsShown)
    }

    function logIn(u, t) {
        context.logIn(u, t);
        toggleLoginModal();
    }


    return <>
        <LoginModal shown={loginIsShown} closeFunction={toggleLoginModal} onLogin={logIn}/>
        <AddPostModal shown={newPostIsShown} onClose={toggleNewPost} onPost={onPost} userToken={context.user.token}/>
        <Header handleLogin={toggleLoginModal} handleNewPost={toggleNewPost} onSearch={onSearch}
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