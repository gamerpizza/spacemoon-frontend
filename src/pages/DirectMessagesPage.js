import Header from "../components/header/Header";
import {Conversations} from "../Conversation";

export function DirectMessagesPage() {
    return <>
        <Header hidePostButton={true}/>
        <Conversations/>
    </>;
}