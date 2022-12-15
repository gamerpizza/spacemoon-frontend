import './App.css';
import Header from './header/Header';
import Dashboard from "./dashboard/Dashboard";
import {useEffect, useState} from "react";
import {Login} from "./login/Login";

const userStorageKey = "user";

function App() {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    const [loginIsShown, setLoginIsShown] = useState(false);

    function toggleLogin (){
        setLoginIsShown(!loginIsShown);
    }

    function loginUser(user, t){
        console.log(user+":"+t)
        setUser(user)
        setToken(t)
        localStorage.setItem(userStorageKey, JSON.stringify({user: user, token: t}))
        toggleLogin()
    }

    function logOut(){
        localStorage.removeItem(userStorageKey)
        setUser("")
        setToken("")
    }

    useEffect(() => {
        let usr = localStorage.getItem(userStorageKey)
        if (usr !== null){
            console.log(usr)
            setUser(JSON.parse(localStorage.getItem(userStorageKey)).user)
            setToken(JSON.parse(localStorage.getItem(userStorageKey)).token)
        }
    }, [])

    return (
        <div className="App">
            <Login shown={loginIsShown} closeFunction={toggleLogin} onLogin={loginUser}/>
            <Header user={user} handleLogin={toggleLogin} handleLogout={logOut}/>
            <Dashboard/>
        </div>
    );
}

export default App;
