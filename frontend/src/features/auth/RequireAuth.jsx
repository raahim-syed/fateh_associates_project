import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "./authSlice"

const RequireAuth = () => {
    const token = useSelector(getToken)
    const location = useLocation()

  return (
    token ? <Outlet /> :
    <Navigate to="/login" state={{from: location}} replace />
  )
}

export default RequireAuth
