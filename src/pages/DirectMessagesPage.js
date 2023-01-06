import {Conversations} from "../directMessage/Conversation";
import {HeaderAndModals} from "../components/header/HeaderAndModals";
import {useContext, useEffect, useState} from "react";
import {NewMessageModal} from "../directMessage/NewMessageModal";
import {Host} from "../BackEnd";
import {UserContext} from "../AppContext";

export function DirectMessagesPage() {
    const [filter, setFilter] = useState("")
    const [conversations, setConversations] = useState(new Map());
    const {user} = useContext(UserContext);
    const [showNewMessageModal, setShowNewMessageModal] = useState(false)

    useEffect(() => {
        retrieveConversations();
        function retrieveConversations() {
            if (user.token) {
                let bearerToken = "Bearer " + user.token;
                fetch(Host + "/dm", {
                    method: "GET", headers: {"Authorization": bearerToken},
                }).then(r => {
                    return r.json();
                }).then(r => {
                    const conversationEntries = Object.entries(r);
                    const conversationsMap = new Map();
                    conversationEntries.forEach(([conversation, messages]) => {
                        if (conversation.includes(filter)) {
                            conversationsMap.set(conversation, messages);
                        }
                    });
                    setConversations(conversationsMap);
                });
            }
        }
    }, [filter, user.token, showNewMessageModal])
    function filterBySearch({target}) {
        setFilter(target.value)

    }

    function flipNewMessageModal() {
        setShowNewMessageModal(!showNewMessageModal)
    }

    return <>
        <NewMessageModal isShown={showNewMessageModal} onClose={flipNewMessageModal}/>
        <HeaderAndModals hidePostButton={true} onSearch={filterBySearch}>
            <button onClick={flipNewMessageModal} className={"Button White"}>+</button>
        </HeaderAndModals>
        <Conversations conversations={conversations}/>
    </>;
}