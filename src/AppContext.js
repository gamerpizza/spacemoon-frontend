import {createContext, useEffect, useState} from "react";

export const UserContext = createContext()

export function AppContext({children}) {
    const [user, setUser] = useState(emptyUser);

    function logIn(u, t) {
        setUser({name: u, token: t});
        localStorage.setItem(userStorageKey, JSON.stringify({user: u, token: t}));
    }
    function logOut() {
        localStorage.removeItem(userStorageKey)
        setUser(emptyUser)
    }
    function readSavedUser() {
        let usr = localStorage.getItem(userStorageKey);
        if (usr !== null) {
            let readUser = JSON.parse(usr);
            setUser(readUser)
        }
    }

    useEffect(() => {
        readSavedUser()
    }, []);

    return <UserContext.Provider value={{user, logIn, logOut}}>
        {children}
    </UserContext.Provider>;
}

const emptyUserName = "";
const emptyUserToken = "";
export const emptyUser = {name: emptyUserName, token: emptyUserToken};
const userStorageKey = "user";