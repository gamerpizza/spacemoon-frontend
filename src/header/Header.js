import './Header.css'
import {SearchBar} from "./SearchBar";
import * as PropTypes from "prop-types";

function UserMenu({handleLogout = () => {}, handleNewPost = () => {}}) {
    return <div>
        <button className="Button White" onClick={handleNewPost}>+</button>
        <button className="Button White" onClick={handleLogout}>Logout</button>
    </div>;
}

function Header({user = "", token = "", handleLogin = ()=>{}, handleLogout = ()=>{},
                    handleNewPost = () => {},
                    onSearch= (filter) => {},
}) {
    return <header className="Header">
        <div className="Container">
            <p className={"HeaderLogo"}>SPACEMOON</p>
            <SearchBar onChange={onSearch}/>
            {user&&token?
                <UserMenu handleLogout={handleLogout} handleNewPost={handleNewPost}/>:
                <div>
                    <button className="LoginButton Button" onClick={handleLogin}>Login</button>
                </div>}
        </div>

    </header>;
}

export default Header;

Header.propTypes = {user: PropTypes.string, handleLogin: PropTypes.func};