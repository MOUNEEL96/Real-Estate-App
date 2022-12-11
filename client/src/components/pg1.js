import React from "react";
import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import Basicinfo from "./Basicinfo";
import "./page.css"
const Pg1=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Leftsidebar/></div>
        <div className="ac1">
        <Header/>
        <Basicinfo/>
        </div>
        </div>
        </>
    )
}
export default Pg1;