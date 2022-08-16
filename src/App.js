import "./App.css";
import Main from "./view/Main";
import Make from "./view/Make";
import OneProduct from "./components/OneProduct";
import UpdateProduct from "./components/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/products" element={<Make />} />
                    <Route path="/product/:id" element={<OneProduct />}  />
                    <Route path="/product/edit/:id" element={<UpdateProduct />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;