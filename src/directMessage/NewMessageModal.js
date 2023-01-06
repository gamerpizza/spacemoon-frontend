import {useContext, useState} from "react";
import {UserContext} from "../AppContext";
import {Host} from "../BackEnd";

export function NewMessageModal({isShown = false, onClose = () => {}}) {
    const [disabled, setDisabled] = useState(true);
    const [alertMessage, setAlertMessage] = useState("")
    const [recipient, setRecipient] = useState("");
    const [content, setContent] = useState("");
    const {user} = useContext(UserContext);

    function sendMessage(e) {
        e.preventDefault();
        let bearerToken = "Bearer " + user.token;
        const data = new FormData(e.target);
        const message = Object.fromEntries(data.entries());
        fetch(Host + "/dm", {
            method: "POST", headers: {"Authorization": bearerToken}, body: JSON.stringify(message),
        }).then(r => {
            if (r.status !== 200){
                return r.text()
            }
        }).then(r => {
            setAlertMessage(r)
            onClose()
        });
    }

    function checkMessage() {
        if (recipient !== "" && content !== "") {
            setDisabled(false);
        } else {
            setDisabled(true);
        }

    }

    function changeRecipient(e) {
        setRecipient(e.target.value);
        checkMessage();
    }

    function changeContent(e) {
        setContent(e.target.value);
        checkMessage();
    }

    return <>{isShown ? <div className={"NewMessage"}>
        <div>
            <form onSubmit={sendMessage}>
                <label htmlFor="recipient">Message for:</label>
                <input type="text" id={"recipient"} name={"recipient"} onChange={changeRecipient}/>
                <textarea name="content" id="content" cols="30" rows="10" onChange={changeContent}></textarea>
                <button type="button" className={"Button White"} onClick={onClose}>Cancel</button>
                <button type="submit" className={"Button"} disabled={disabled}>Send</button>
                {alertMessage?<p className={"DirectMessagesAlertMessage"}>{alertMessage}</p>:""}
            </form>
        </div>
    </div> : ""}</>;
}