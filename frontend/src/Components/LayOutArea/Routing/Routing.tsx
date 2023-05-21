import { Navigate, Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";
import AddMeeting from "../../MeetingArea/AddMeeting/AddMeeting";
import MeetingList from "../../MeetingArea/MeetingList/MeetingList";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
		<Routes>
                <Route path="/home" element={<Home/>}/>
                <Route path="/add" element={<AddMeeting/>}/>
                <Route path="/meetings" element={<MeetingList/>}/>
                <Route path="/" element={<Navigate to="/home"/> }/>
                
            </Routes>

        </div>
    );
}

export default Routing;
