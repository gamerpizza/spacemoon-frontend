import './App.css';
import Header from './header/Header';
import Dashboard from "./dashboard/Dashboard";
import {useState} from "react";
import {Login} from "./login/Login";

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
