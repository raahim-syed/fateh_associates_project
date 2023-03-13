//Core Modules
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom"

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Pages
import Login from "./pages/Login"
import Candidate from "./pages/Candidate"
import Umbrella from "./pages/Umbrella"
import Client from "./pages/Client"
import Speciality from "./pages/Speciality"

//Layouts
import DashboardLayout from "./pages/layouts/DashboardLayout"
import RequireAuth from "./pages/layouts/RequireAuth"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<Login />} />

      {/* <Route element={<RequireAuth />} > */}
        <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="candidates" element={<Candidate />}>
              <Route path="update" />
            </Route>
            <Route path="umbrella" element={<Umbrella />} >
              <Route path="update" />
            </Route>
            <Route path="client" element={<Client/>} >
              <Route path="update" />
            </Route>
            <Route path="specialities" element={<Speciality />} >
              <Route path="update" />
            </Route>
        </Route>        
      {/* </Route> */}


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
