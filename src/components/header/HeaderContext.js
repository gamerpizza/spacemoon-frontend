import * as PropTypes from "prop-types";
import {createContext, useState} from "react";

export const LoginContext = createContext()

export function HeaderContext({children}) {
    const [loginIsShown, setLoginIsShown] = useState(false);
    return <LoginContext.Provider value={{loginIsShown, setLoginIsShown}}>
        {children}
    </LoginContext.Provider>;
}


HeaderContext.propTypes = {children: PropTypes.node};