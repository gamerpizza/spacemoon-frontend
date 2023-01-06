import "./Conversation.css";
import {useContext, useState} from "react";
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

	const {user} = useContext(UserContext);

	return <>
		<button className={"ConversationOtherPerson Button White"} onClick={toggleShowDetails}>{conversation}</button>
		{showConversation ? <ul>
			{messages.sort((m1, m2) =>{
				if (Date.parse(m1.posting_time)>Date.parse(m2.posting_time)) return -1
				if (Date.parse(m1.posting_time)<Date.parse(m2.posting_time)) return 1
				return 0
			})
				.map(message => {

					const isMe = message.author ===  user.user
				return <li key={Date.parse(message.posting_time)} className={isMe?"ConversationMessage Me":"ConversationMessage Them"}>
					<blockquote>{message.content}</blockquote>
					<p>from <strong>{message.author} </strong>
						to <strong>{message.recipient}</strong> @ {new Date(message.posting_time).toUTCString()}
					</p>
				</li>;
			})}
		</ul> : ""}</>;
}

Conversation.propTypes = {
	messages: PropTypes.array,
};

function ConversationsList({
							   conversationsMap = new Map(), className
						   }) {
	const conversationProfiles = Array.from(conversationsMap.keys());

	return <div className={className}>

		<ul>
			{conversationProfiles.map(conversation => {
				const messages = conversationsMap.get(conversation);
				return <li key={conversation} className={"Conversation"}>
					<Conversation messages={messages} conversation={conversation}/>
				</li>;
			})}</ul>
	</div>;
}

export function Conversations({conversations = new Map()}) {

	return <div className={"DirectMessages"}>
		<ConversationsList conversationsMap={conversations} className={"ConversationsList"}/>
	</div>;
}

