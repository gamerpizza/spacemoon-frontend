import './App.css';
import Header from './header/Header';
import Dashboard from "./dashboard/Dashboard";
import {useEffect, useState} from "react";
import {Login} from "./login/Login";

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
        localStorage.setItem("user", JSON.stringify({user: user, token: t}))
        toggleLogin()
    }

    useEffect(() => {
        let usr = localStorage.getItem("user")
        if (usr !== null){
            console.log(usr)
            setUser(JSON.parse(localStorage.getItem("user")).user)
            setToken(JSON.parse(localStorage.getItem("user")).token)
        }
    }, [])



    return (
        <div className="App">
            <Login shown={loginIsShown} closeFunction={toggleLogin} onLogin={loginUser}/>
            <Header user={user} handleLogin={toggleLogin}/>
            <Dashboard/>
        </div>
    );
}

export default App;
