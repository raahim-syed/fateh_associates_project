//Core Modules

//Components
import Login from "./components/forms/Login"
import ClientForm from "./components/forms/ClientForm"
import CandidateFrom from "./components/forms/CandidateForm"
import UmbrellaForm from "./components/forms/UmbrellaFrom";
import SpecialityForm from "./components/forms/SpecialityForm";

//SideBar
import Sidebar from "./components/sidebar/Sidebar";

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
    <Container fluid>
      <Row>
        <Col md="2">
          <Sidebar />
        </Col>
        <Col md="9">
          <CandidateFrom />
        </Col>
      </Row>
    </Container>
      {/* <Login />
      <hr>
      </hr>
      <ClientForm />
      <CandidateFrom />
      <UmbrellaForm />
      <SpecialityForm /> */}
    </>
  );
}

export default App;
