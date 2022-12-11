import React from "react";
import Leftsidebar from "./Leftsidebar";
import Header from "./Header";
import Table from "./Table";
import "./page.css"

const Propertylist=()=>{
    return(
        <>
        <div className="acc">
            <div>
        <Leftsidebar/></div>
        <div className="ac">
        <Header/>
        <Table/>
        </div>
        </div>
        </>
    )
}
export default Propertylist;