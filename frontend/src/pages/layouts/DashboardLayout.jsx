import {Container, Row, Col} from "react-bootstrap"
import { Outlet } from "react-router-dom"

import { useSelector } from "react-redux"
import { getUser, getToken } from "../../features/auth/authSlice"

//Components
import Sidebar from "../../components/sidebar/Sidebar"

export default function DashboardLayout() {
  const user = useSelector(getUser)

  const welcomeMsg = user ? `Welcome User: ${user}` : "Welcome";

  return (
    <>
    <Container fluid>
      <Row>
        <Col md="2">
          <Sidebar user={welcomeMsg} />
        </Col>
        <Col md="9">
          <Outlet />
        </Col>
      </Row>
    </Container> 
    </>
  )
}
