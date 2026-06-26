import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Menu from "../components/menu";

export default function Layout(){

    return(
        <>
        <Header/>
        <Outlet/>
        <Menu/>
        </>
    )
}