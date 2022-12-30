import {SearchBar} from "./SearchBar";
import * as PropTypes from "prop-types";

function UserMenu({handleLogout = () => {}, handleNewPost = () => {}, hidePostButton = false}) {
    return <div className={"HeaderButtons"}>
        {hidePostButton?<></>:<button className="Button White" onClick={handleNewPost}>+</button>}
        <button className="Button White" onClick={handleLogout}>Logout</button>
    </div>;
}

function Header({user = "", token = "", handleLogin = ()=>{}, handleLogout = ()=>{},
                    handleNewPost = () => {},
                    onSearch= (filter) => {},
    hidePostButton = false,
}) {
    return <header className="Header">
        <div className="Container">
            <a className={"HeaderLogo"} href={"/"}>bubblegum</a>
            <SearchBar onChange={onSearch}/>
            {user&&token?
                <UserMenu handleLogout={handleLogout} handleNewPost={handleNewPost} hidePostButton={hidePostButton}/>:
                <div className={"HeaderButtons"}>
                    <button className="LoginButton Button" onClick={handleLogin}>Login</button>
                </div>}
        </div>

    </header>;
}

export default Header;

Header.propTypes = {user: PropTypes.string, handleLogin: PropTypes.func};