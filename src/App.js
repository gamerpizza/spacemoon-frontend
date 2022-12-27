import './App.css';
import Header from './header/Header';
import Dashboard from "./dashboard/Dashboard";
import {useEffect, useState} from "react";
import {Login} from "./login/Login";
import {AddPost} from "./addPost/AddPost";

const userStorageKey = "user";

function App() {
    const [user, setUser] = useState('');
    const [token, setToken] = useState('');
    const [loginIsShown, setLoginIsShown] = useState(false);
    const [newPostIsShown, setNewPostIsShown] = useState(false);
    const [filter, setFilter] = useState("");

    function toggleLogin (){
        setLoginIsShown(!loginIsShown);
    }

    function loginUser(user, t){
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

    function toggleNewPost(){
        setNewPostIsShown(!newPostIsShown)
    }

    useEffect(() => {
        let usr = localStorage.getItem(userStorageKey);
        if (usr !== null){
            setUser(JSON.parse(localStorage.getItem(userStorageKey)).user);
            setToken(JSON.parse(localStorage.getItem(userStorageKey)).token);
        }
    }, [filter]);

    function filterBySearch({target}) {
        setFilter(target.value)
    }

    return (
        <div className="App">
            <Login shown={loginIsShown} closeFunction={toggleLogin} onLogin={loginUser}/>
            <AddPost  shown={newPostIsShown} onClose={toggleNewPost} userToken={token}/>
            <Header user={user} token={token} handleLogin={toggleLogin} handleLogout={logOut}
                    handleNewPost={toggleNewPost} onSearch={filterBySearch}
            />
            <Dashboard filterString={filter} userToken={token} userName={user}/>
        </div>
    );
}

export default App;
