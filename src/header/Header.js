import './Header.css'
import {SearchBar} from "./SearchBar";
import * as PropTypes from "prop-types";

function UserMenu({handleLogout = () => {}, handleNewPost = () => {}}) {
    return <div>
        <button className="Button White" onClick={handleNewPost}>+</button>
        <button className="Button White" onClick={handleLogout}>Logout</button>
    </div>;
}

function Header({user = "", token = "", handleLogin = ()=>{}, handleLogout = ()=>{}, handleNewPos: handleNewPost = () => {
}}) {
    return <header className="Header">
        <div className="Container">
            <p>SPACEMOON</p>
            <SearchBar/>
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