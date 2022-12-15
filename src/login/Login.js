import "./Login.css"
import * as PropTypes from "prop-types";
import {useState} from "react";

function LoginForm({onClose, onLoggedIn}) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userInputIsWrong, setUserInputIsWrong] = useState(false)
    const [passInputIsWrong, setPassInputIsWrong] = useState(false)
    const [invalidCredentials, setInvalidCredentials] = useState(false)
    const tryToLogin = () => {
        let stop = false
        stop = validateUser();
        if (stop) return;
        stop = validatePassword();
        if (stop) return;

        fetch('http://34.172.187.156:1234/login', {
            method: "GET",
            headers: {"Authorization": "Basic " + window.btoa(username + ":" + password)}
        })
            .then(response => {
                if (response.status === 401){
                    setInvalidCredentials(true)
                    return ""
                }
                return response.text()
            }).then(r => {
            let token = r.replace("token: ", "")
            if (token.trim() !== ""){
                onLoggedIn(username, token)
            }
        });

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
    }

    return (
        <div className="LoginModal">
            <form>
                <button type="button" className="CloseButton" onClick={onClose}>X</button>
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
                <p className={invalidCredentials?"LoginErrorMessage Show":"LoginErrorMessage"} >Invalid Username/Password</p>
                <button type="button" className="Button LoginSendButton" onClick={tryToLogin}>Login</button>
            </form>
        </div>
    );
}

export function Login({shown, closeFunction, onLogin}) {
    return (
        <>{shown ? <LoginForm onClose={closeFunction} onLoggedIn={onLogin}/> : <></>}</>
    );
}

Login.propTypes = {shown: PropTypes.bool};