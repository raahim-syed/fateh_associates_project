import { Outlet } from "react-router-dom"
import LoginForm from "../components/forms/LoginForm"

export default function Login() {
  return (
    <div>
      <LoginForm />
      <Outlet />
    </div>
  )
}
