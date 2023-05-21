import { useNavigate } from "react-router-dom";
import "./AddMeeting.css";
import MeetingModel from "../../../Models/MeetingModel";
import { useForm } from "react-hook-form";
import meetingService from "../../../Service/MeetingService";

function AddMeeting(): JSX.Element {
    const {handleSubmit , register} = useForm <MeetingModel>();
    
    const navigate = useNavigate();

    async function send(meeting:MeetingModel) {
        try {
            await meetingService.addMeeting(meeting);
            alert("meeting has been added")
            navigate("/home");
        }
        catch(err: any) {
            alert(err.message);
        }
    }
    return (
        <div className="AddMeeting">
				<h1>you are welcomed to add a meeting</h1>

 <form onSubmit={handleSubmit(send)}>
    <label>teamCode:</label><br/>
    <input type="number" {...register("teamCode")} ></input><br/>

    <label>description:</label><br/>
    <input type="text" {...register("description")}></input><br/>

    <label>startDate:</label><br/>
    <input  type="date" {...register("startDate")}></input><br/>

    <label>endDate:</label><br/>
    <input type="date" {...register("endDate")} ></input><br/> 
 
    <label> room: </label><br/>
    <input type="text"  {...register("room")}></input><br/>

     
     <button>Add</button>

</form>

        </div>
    );
}

export default AddMeeting;


