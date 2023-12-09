import React from "react";
import Header from '../src/Components/Header/Header';
import { Outlet } from "react-router-dom";


function Main(){


    return(
        <>
         <Header />
         <Outlet />
        </>
    )
}
export default Main;