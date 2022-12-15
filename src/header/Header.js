import './Header.css'
import {SearchBar} from "./SearchBar";
import * as PropTypes from "prop-types";

function Header({user = "", handleLogin = ()=>{}}) {
    const toggleLogin = () => {
        console.log("CLICK")
        console.log(handleLogin)
        handleLogin()
    }
    return <header className="Header">
        <div className="Container">
            <p>SPACEMOON</p>
            <SearchBar/>
            {user?<p>User Menu</p>:<div><button className="LoginButton" onClick={toggleLogin}>Login</button></div>}
        </div>

    </header>;
}

export default Header;

Header.propTypes = {user: PropTypes.string, handleLogin: PropTypes.func};