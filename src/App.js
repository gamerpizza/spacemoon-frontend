import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {ProfilePage} from "./pages/ProfilePage";
import {DirectMessagesPage} from "./Conversation";



function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path={"/"} element={<HomePage/>}></Route>
                <Route path={"user"} element={<ProfilePage/>}/>
                <Route path={"dm"} element={<DirectMessagesPage/>}/>
            </Routes>
        </div>
    );
}

export default App;


