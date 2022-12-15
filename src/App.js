import './App.css';
import Header from './header/Header';
import Dashboard from "./dashboard/Dashboard";
import {useState} from "react";
import {Login} from "./login/Login";

function App() {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    const [loginIsShown, setLoginIsShown] = useState(false);

    function toggleLogin (){
        setLoginIsShown(!loginIsShown);
    }

    function getUserCredential(user, token){
        console.log(user+":"+token)
        setUser(user)
        setToken(token)
    }

    return (
        <div className="App">
            <Login shown={loginIsShown} closeFunction={toggleLogin} onLogin={getUserCredential}/>
            <Header user={user} handleLogin={toggleLogin}/>
            <Dashboard/>
        </div>
    );
}

export default App;
