import "./Conversation.css";
import {useState} from "react";
import * as PropTypes from "prop-types";

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

function ConversationsList({
							   conversationsMap = new Map(), className
						   }) {
	const conversationProfiles = Array.from(conversationsMap.keys());

	return <div className={className}>

		<ul>
			{conversationProfiles.map(conversation => {
				const messages = conversationsMap.get(conversation);
				return <li key={conversation}>
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

