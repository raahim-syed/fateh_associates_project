import { useState } from "react";
import { Button, Collapse } from "react-bootstrap";

function SidebarDropdown({name}) {
    const [open, setOpen] = useState(false);
  return (
    <>
        <div className="d-flex justify-content-between align-items-center">
            <h4>
                {name} 
            </h4>
            <span
                style={{fontSize: "0.7rem"}}
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
            >Icon</span>
        </div>
        <Collapse in={open}>
            <div id="example-collapse-text">
                <ul>
                    <li> Element </li>
                    <li> Element </li>
                    <li> Element </li>
                </ul>
            </div>
        </Collapse>
    </>
  )
}

export default SidebarDropdown
