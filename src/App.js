import './App.css';
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./HomePage";
import {ProfilePage} from "./ProfilePage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path={"/"} element={<HomePage/>}></Route>
                <Route path={"user"} element={<ProfilePage/>}>
                </Route>
            </Routes>
        </div>
    );
}

export default App;


