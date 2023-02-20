import {Container, Row, Col} from "react-bootstrap"
import { Outlet } from "react-router-dom"

//Components
import Sidebar from "../../components/sidebar/Sidebar"

export default function DashboardLayout() {
  return (
    <>
    <Container fluid>
      <Row>
        <Col md="2">
          <Sidebar />
        </Col>
        <Col md="9">
          <Outlet />
        </Col>
      </Row>
    </Container> 
    </>
  )
}
