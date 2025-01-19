/* eslint-disable react/prop-types */
import { Navigate } from "react-router"

export const ProtectedRouteForAdmin = ({children}) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const token = localStorage.getItem("authToken");
    if (!token) {
      console.error("No token found. Redirecting to login...");
      toast.error("No token found. Redirecting to login...")
      return <Navigate to={'/userlogin'} />;
    }

    if (user?.role === "admin") {
      return children
    }
    else {
      return <Navigate to={'/userlogin'}/>
    }
}