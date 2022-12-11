import React from "react";
import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import Locationinfo from "./Locationinfo";
import "./page.css"
const Pg4=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Leftsidebar/></div>
        <div className="ac4">
        <Header/>
        <Locationinfo/>
        </div>
        </div>
        </>
    )
}
export default Pg4;