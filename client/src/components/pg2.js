import React from "react";
import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import Propertydetail from "./Propertdetail";

import "./page.css"
const Pg2=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Leftsidebar/></div>
        <div className="ac2">
        <Header/>
        <Propertydetail/>
        </div>
        </div>
        </>
    )
}
export default Pg2;