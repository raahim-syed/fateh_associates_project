//Core Modules
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Pages
import Login from "./pages/Login"
import Candidate from "./pages/Candidate"

//Layouts
import DashboardLayout from "./pages/layouts/DashboardLayout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<Login />} />


      <Route path="dashboard" element={<DashboardLayout />}>
        <Route path="candidates" element={<Candidate />}>

        </Route>
        <Route path="umbrella" element={<Candidate />} >

        </Route>
        <Route path="client" element={<Candidate />} >

        </Route>
        <Route path="specialities" element={<Candidate />} >

        </Route>
      </Route>
    </Route>
  )
)


function App() {
  return (
    <>
    <RouterProvider router={router} />
    {/* <Container fluid>
      <Row>
        <Col md="2">
          <Sidebar />
        </Col>
        <Col md="9">
          <CandidateFrom />
        </Col>
      </Row>
    </Container> */}
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
