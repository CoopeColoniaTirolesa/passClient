import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children, requiredRole})=>{
    const role = localStorage.getItem('role')

    if(role != 'admin'){
        return <Navigate to="/login"/>
    }

    return children;
}

