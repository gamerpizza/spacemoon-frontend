import {SearchBar} from "./SearchBar";
import * as PropTypes from "prop-types";
import {useContext} from "react";
import {UserContext} from "../../AppContext";

function UserMenu({
                      handleLogin = () => {}, handleNewPost = () => {}, hidePostButton = false
                  }) {
    const {user, logOut} = useContext(UserContext)
    return  <div className={"HeaderButtons"}>
        {user.user && user.token
        ? <>
            {hidePostButton ? "" : <button className="Button White" onClick={handleNewPost}>+</button>}
            <a className={"Button White"} href={"/dm"}>#</a>
            <button className="Button White" onClick={logOut}>Logout</button>
        </>
        : <button className="LoginButton Button" onClick={handleLogin}>Login</button>
        }
    </div>;
}

function Header({
                    handleLogin = () => {}, handleNewPost = () => {}, onSearch = (filter) => {}, hidePostButton = false
                }) {
    return <header className="Header">
        <div className="Container">
            <a className={"HeaderLogo"} href={"/"}>bubblegum</a>
            <SearchBar onChange={onSearch}/>
            <UserMenu handleLogin={handleLogin} handleNewPost={handleNewPost} hidePostButton={hidePostButton}/>
        </div>
    </header>;
}

export default Header;

Header.propTypes = {user: PropTypes.string, handleLogin: PropTypes.func};