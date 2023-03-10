import React from "react";
import { Navigate } from "react-router-dom";
import Main from "./Main";

const ProtectedRouteElement = ({ element: Component, ...props}) => {
  // return props.isLoggedIn ? <Component {...props} /> : <Navigate to='/sign-in' replace/>
  return true ? <Main {...props}/> : <Navigate to='/sign-in'/>

}



export default ProtectedRouteElement