//Core Modules

//Components
import Login from "./components/forms/Login"
import ClientForm from "./components/forms/ClientForm"

//CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
      <Login />
      <hr>
      </hr>
      <ClientForm />
    </>
  );
}

export default App;
