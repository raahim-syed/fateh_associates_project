import { Navigate, Outlet, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { getToken } from "../../features/auth/authSlice"


const RequireAuth = () => {
    const { token } = useSelector(getToken);
    const location = useLocation();

  return (
    token ? <Outlet /> : <Navigate to="/login" state={{from: location}} replace />
  )
}

export default RequireAuth
