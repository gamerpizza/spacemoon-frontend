import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {ProfilePage} from "./pages/ProfilePage";
import {AppContext} from "./AppContext";
import {DirectMessagesPage} from "./pages/DirectMessagesPage";
import {PostPage} from "./PostPage";


function App() {
    return (
        <div className="App">
            <AppContext>
                <Routes>
                    <Route exact path={"/"} element={<HomePage/>}></Route>
                    <Route path={"user"} element={<ProfilePage/>}/>
                    <Route path={"dm"} element={<DirectMessagesPage/>}/>
                    <Route path={"post"} element={<PostPage/>}/>
                </Routes>
            </AppContext>

        </div>
    );
}

export default App;

