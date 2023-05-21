import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    return (
        <div className="Header">
			<h1></h1>
            <NavLink to={"/add"}>Add</NavLink>
            <span>|</span>
            <NavLink to={"/meetings"}>View Meetings</NavLink>
           
        </div>
    );
}

export default Header;
