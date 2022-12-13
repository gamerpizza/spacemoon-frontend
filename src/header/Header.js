import './Header.css'
import {SearchBar} from "./SearchBar";

function Header() {
    return <header className="Header">
        <div className="Container">
            <p>SPACEMOON</p>
            <SearchBar/>
            <p>User Menu</p>
        </div>

    </header>;
}

export default Header;
