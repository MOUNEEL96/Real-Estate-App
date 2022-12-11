// import axios from "axios";
// export const fetchData=(methodType, endpoint, isAuthtoken, payload="") => {
//     const defaultUrl="https://realestate-10x-server.herokuapp.com";
//     const authToken=localStorage.getItem("authorization");
//     let headers={};
//     if(isAuthtoken){
//         headers["authorization"]=authToken;
//     }
//     return axios({
//         url:`${defaultUrl}/${endpoint}`,
//         method:methodType,
//         headers:headers,
//         data:payload
//     })
// }