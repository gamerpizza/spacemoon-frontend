import Header from "../components/header/Header";
import {Conversations} from "../directMessage/Conversation";

export function DirectMessagesPage() {
    return <>
        <Header hidePostButton={true}/>
        <Conversations/>
    </>;
}