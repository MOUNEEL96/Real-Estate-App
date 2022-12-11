import React from "react";
import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import Generalinfo from "./Generalinfo";
import "./page.css"
const Pg3=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Leftsidebar/></div>
        <div className="ac3">
        <Header/>
        <Generalinfo/>
        </div>
        </div>
        </>
    )
}
export default Pg3;