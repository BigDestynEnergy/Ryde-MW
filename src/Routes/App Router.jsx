import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "../pages/home";
import Profile from "../pages/profile";
import Track from "../pages/track";
import Checkout from "../pages/checkout";
import { useState } from "react";

export default function AppRouter(){

    const [info, setInfo] = useState([
        {type:"Mobile", from: "Limbe", to: "Lingadzi", price: 150000}
    ]);
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="track" element={<Track/>}/>
                    <Route path="checkout" element={<Checkout info={info} setInfo={setInfo}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}