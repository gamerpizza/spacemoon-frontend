import "./Login.css"
import * as PropTypes from "prop-types";
import {useContext, useState} from "react";
import {Host} from "../../../BackEnd";
import {UserContext} from "../../../AppContext";
import {LoginContext} from "../HeaderContext";

function LoginForm() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userInputIsWrong, setUserInputIsWrong] = useState(false)
    const [passInputIsWrong, setPassInputIsWrong] = useState(false)
    const [invalidCredentials, setInvalidCredentials] = useState(false)
    const [isSignUp, setIsSignup] = useState(false)
    const userContext = useContext(UserContext)
    const loginContext = useContext(LoginContext)


    const loginOrSignup = () => {
        let stop = false
        stop = validateUser();
        if (stop) return;
        stop = validatePassword();
        if (stop) return;

        if (isSignUp){
            signUp();
        } else {
            login();
        }


        function validateUser() {
            if (username.trim() === "") {
                setUserInputIsWrong(true)
                return true
            } else {
                setUserInputIsWrong(false)
                return false
            }
        }
        function validatePassword() {
            if (password.trim() === "") {
                setPassInputIsWrong(true)
                return true
            } else {
                setPassInputIsWrong(false)
                return false
            }
        }
        function login() {
            fetch(Host + '/login', {
                method: "GET",
                headers: {"Authorization": "Basic " + window.btoa(username + ":" + password)}
            })
                .then(response => {
                    if (response.status < 200 || response.status > 299) {
                        setInvalidCredentials(true)
                        return ""
                    }
                    return response.text()
                }).then(r => {
                let token = r.replace("token: ", "")
                if (token.trim() !== "") {
                    userContext.logIn(username, token)
                    close()
                }
            });
        }
        function signUp() {
            console.log(Host)
            let user = {user_name: username, password: password}
            fetch(Host + '/login', {
                method: "POST",
                body: JSON.stringify(user),
            }).then(response => {
                console.log(response)
                if (response.status < 200 && response.status > 299) {
                    alert("could not create user" + response.status);
                } else {
                    login();
                }

            })
        }
    }

    function toggleSignUp() {
        setIsSignup(!isSignUp)
    }

    function close(){
        loginContext.setLoginIsShown(false)
    }

    return (
        <div className="LoginModal">
            <form>
                <button type="button" className="CloseButton" onClick={close}>X</button>
                <label htmlFor="UserName">User Name: </label>
                <input value={username} type="text" name="UserName" id="UserName" placeholder="Your Username"
                       onChange={(event) => {
                           setUsername(event.target.value)
                       }} className={userInputIsWrong ? "WrongInput" : ""}/>
                <label htmlFor="Password">Password: </label>
                <input type="password" name="Password" id="Password" placeholder="*****"
                       onChange={(event) => {
                           setPassword(event.target.value)
                       }} className={passInputIsWrong ? "WrongInput" : ""}/>
                <p className={invalidCredentials ? "LoginErrorMessage Show" : "LoginErrorMessage"}>Invalid
                    Username/Password</p>
                <p>
                    {isSignUp ? "Already have an account?" : "Want to create an account?"}
                    <button type={"button"}
                            className={"Button White"} onClick={toggleSignUp}>{isSignUp ? "Log In" : "Sign up"}</button>
                </p>
                <button type="button"
                        className="Button LoginSendButton Big"
                        onClick={loginOrSignup}>{isSignUp ? "Sign Up" : "Login"}</button>
            </form>
        </div>
    );
}

export function LoginModal() {
    const {loginIsShown} = useContext(LoginContext)
    return (
        <>{loginIsShown ? <LoginForm/> : <></>}</>
    );
}

LoginModal.propTypes = {shown: PropTypes.bool};