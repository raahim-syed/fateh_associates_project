import { NavLink } from "react-router-dom"
import SidebarDropdown from "./SidebarDropdown"


function Sidebar() {
  return (
    <aside className="sidebar p-3 d-flex flex-column" style={{maxWidth: "300px",}}>
        <h2> Sidebar </h2>
        {/* <SidebarDropdown name="Candidate"/>   */}
        <NavLink to="candidates">Candidates</NavLink>
        <NavLink to="umbrella">Umbrella</NavLink>
        <NavLink to="speciality">Speciality</NavLink>
        <NavLink to="client">Client</NavLink>
        <NavLink to="invoice">Invoice</NavLink>
    </aside>
  )
}

export default Sidebar
