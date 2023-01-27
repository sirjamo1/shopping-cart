import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/shop" element={<Shop />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
