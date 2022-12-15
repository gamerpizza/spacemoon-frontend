import './App.css';
import Header from './header/Header';
import Dashboard from "./dashboard/Dashboard";
import {useCallback, useEffect, useState} from "react";
import * as PropTypes from "prop-types";

function LoginForm({onClose}) {
    return (
        <div className="LoginModal">
            <form>
                <button className="CloseButton" onClick={onClose}>X</button>
                <label htmlFor="UserName">User Name: </label><input type="text" name="UserName" id="UserName"/>
                <label htmlFor="Password">Password: </label><input type="password" name="Password" id="Password"/>
            </form>
        </div>
    );
}

function Login({shown, closeFunction}) {
    return (
        <>{shown?<LoginForm onClose={closeFunction}/>:<></>}</>
    );
}

Login.propTypes = {shown: PropTypes.bool};

function App() {
    const [user, setUser] = useState('');
    const [loginIsShown, setLoginIsShown] = useState(false);

    function toggleLogin (){
        setLoginIsShown(!loginIsShown);
    }

    return (
        <div className="App">
            <Login shown={loginIsShown} closeFunction={toggleLogin}/>
            <Header user={user} handleLogin={toggleLogin}/>
            <Dashboard/>
        </div>
    );
}

export default App;
