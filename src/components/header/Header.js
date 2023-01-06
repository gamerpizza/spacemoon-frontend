import {SearchBar} from "./SearchBar";
import * as PropTypes from "prop-types";
import {useContext, useEffect, useState} from "react";
import {UserContext} from "../../AppContext";
import {LoginContext} from "./HeaderContext";

function UserMenu({children}) {
    const userContext = useContext(UserContext)

    const loginContext = useContext(LoginContext)
    function openLogin() {
        loginContext.setLoginIsShown(true);
    }

    function logOut(){
        userContext.logOut()
    }

    const [isLoggedIn,setIsLoggedIn] = useState(isNotEmpty(userContext.user.token))

    useEffect(()=>{
        setIsLoggedIn(isNotEmpty(userContext.user.token))
    }, [userContext])

    return  <div className={"HeaderButtons"}>
        {isLoggedIn
        ? <>
            {children}
            <a className={"Button White"} href={"/dm"}>#</a>
            <button className="Button White" onClick={logOut}>Logout</button>
        </>
        : <button className="LoginButton Button" onClick={openLogin}>Login</button>
        }
    </div>;

    function isNotEmpty(stringToBeChecked) {
        return stringToBeChecked !== undefined && stringToBeChecked !== null && stringToBeChecked.trim() !== "";
    }
}

function Header({
                    onSearch = (filter) => {}, children
                }) {
    return <header className="Header">
        <div className="Container">
            <a className={"HeaderLogo"} href={"/"}>bubblegum</a>
            <SearchBar onChange={onSearch}/>
            <UserMenu>{children}</UserMenu>
        </div>
    </header>;
}

export default Header;

Header.propTypes = {user: PropTypes.string, handleLogin: PropTypes.func};