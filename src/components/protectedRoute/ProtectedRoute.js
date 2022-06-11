import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

const ProtectedRoute = (props) => {
    const isLogged = useSelector(state => state.loginStore.isUserLogin)
    if(isLogged)
        return props.children
    else
     return <Navigate to={"/"} replace={true}/>
}

export default ProtectedRoute;