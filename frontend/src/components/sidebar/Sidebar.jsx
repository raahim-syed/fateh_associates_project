import SidebarDropdown from "./SidebarDropdown"


function Sidebar() {
  return (
    <aside className="sidebar p-3" style={{maxWidth: "300px",}}>
        <h2> Sidebar </h2>
        <SidebarDropdown name="Candidate"/>  
    </aside>
  )
}

export default Sidebar
