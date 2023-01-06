import "./Conversation.css";
import {useContext, useEffect, useState} from "react";
import {Host} from "../BackEnd";
import * as PropTypes from "prop-types";
import {UserContext} from "../AppContext";

export function Conversation({
								 messages = [{recipient: "", author: "", content: "", posting_time: ""}],
								 conversation = ""
							 }) {
	const [showConversation, setShowConversation] = useState(false);

	function toggleShowDetails() {
		setShowConversation(!showConversation);
	}

	return <>
		<button className={"ConversationOtherPerson Button White"} onClick={toggleShowDetails}>{conversation}</button>
		{showConversation ? <ul>
			{messages.map(message => {
				return <li key={message.posting_time}>
					<p>from <strong>{message.author}</strong> to <strong>{message.recipient}</strong> : {message.posting_time}
					</p>
					<blockquote>{message.content}</blockquote>
				</li>;
			})}
		</ul> : ""}</>;
}

Conversation.propTypes = {
	messages: PropTypes.array,
};

function NewMessageModal({
							 isShown = false, onClose = () => {
	}
						 }) {
	const [disabled, setDisabled] = useState(true);
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
			console.log(r);
		}).then(r => {
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
			</form>
		</div>
	</div> : ""}</>;
}

function ConversationsList({
							   conversationsMap = new Map(), className
						   }) {

	const [showNewMessageModal, setShowNewMessageModal] = useState(false);

	function flipNewMessageModal() {
		setShowNewMessageModal(!showNewMessageModal);
	}

	const conversationProfiles = Array.from(conversationsMap.keys());

	return <div className={className}>
		<button className={"Button White"} onClick={flipNewMessageModal}>New Direct Message</button>
		<ul>
			{conversationProfiles.map(conversation => {
				const messages = conversationsMap.get(conversation);
				return <li key={conversation}>
					<NewMessageModal isShown={showNewMessageModal} onClose={flipNewMessageModal}/>
					<Conversation messages={messages} conversation={conversation}/>
				</li>;
			})}</ul>
	</div>;
}

export function Conversations() {
	const [conversations, setConversations] = useState(new Map());
	const {user} = useContext(UserContext);
    console.log(user)
	useEffect(() => {
		let bearerToken = "Bearer " + user.token;
		fetch(Host + "/dm", {
			method: "GET", headers: {"Authorization": bearerToken},
		}).then(r => {
			return r.json();
		}).then(r => {
			const conversationEntries = Object.entries(r);
			const conversationsMap = new Map();
			conversationEntries.forEach(([conversation, messages]) => {
				conversationsMap.set(conversation, messages);
			});
			setConversations(conversationsMap);
		});
	}, [user.token]);

	return <div className={"DirectMessages"}>
		<ConversationsList conversationsMap={conversations} className={"ConversationsList"}/>
	</div>;
}

