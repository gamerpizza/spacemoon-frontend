import './Header.css'
import {SearchBar} from "./SearchBar";
import * as PropTypes from "prop-types";

function UserMenu({handleLogout = () => {}}) {
    return <div><button className="Button White">+ Add Product</button> <button className="Button White" onClick={handleLogout}>Logout</button></div>;
}

function Header({user = "", handleLogin = ()=>{}, handleLogout = ()=>{}}) {
    return <header className="Header">
        <div className="Container">
            <p>SPACEMOON</p>
            <SearchBar/>
            {user?<UserMenu handleLogout={handleLogout}/>:<div><button className="LoginButton Button" onClick={handleLogin}>Login</button></div>}
        </div>

    </header>;
}

export default Header;

Header.propTypes = {user: PropTypes.string, handleLogin: PropTypes.func};