import {Navigate} from "react-router-dom";
import React from "react";
const Protected=({children})=>{
    const token=localStorage.getItem("authorization");

return(
    <>
    {token.length ? children: <Navigate to="/"/>}
    </>
)
}
export default Protected;

// import React from "react";
// import { useAuth } from "./useAuth";
// import { Navigate } from "react-router-dom";

// export const Protected = ({ children }) => {
//   const auth = useAuth();

//   return auth.email ? (
//     children
//   ) : (
//     <Navigate to="/"/>
//   );
// };
// export default Protected;