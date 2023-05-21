import { ChangeEvent, useEffect, useState } from "react";
import "./MeetingList.css";
import TeamsModel from "../../../Models/TeamsModel";
import MeetingModel from "../../../Models/MeetingModel";
import meetingService from "../../../Service/MeetingService";

function MeetingList(): JSX.Element {

    const [team, setTeam] = useState <TeamsModel[]>([]);

    const [meeting, setMeeting] = useState<MeetingModel[]>([]);
  
     useEffect(()=>{
      meetingService.getAllTeams()
      .then(team => setTeam(team))
      .catch(err => alert(err.message))
  
     },[])
  
     async function showFurniture(args: ChangeEvent<HTMLSelectElement>){
      const value = +args.target.value;
      meetingService.getMeetingByTeam(value)
      .then(meeting=>setMeeting(meeting))
      .catch(err=>alert(err.message))
      
   }
  
    return (
        <div className="MeetingList">
             <div className="List">
						<h1>Meeting list!</h1><br/>
                        <label>Select Team</label><br/>
            <select defaultValue="" onChange={showFurniture}>
                <option disabled value="" >select..</option>
                {team.map(t =>
                <option key={t.teamCode} value={t.teamCode}>
                    {t.team}
                    </option>
                    )}
            </select><br/>

            <br/>
            <table>
                                                       <th>description</th>
                                                       <th>teamCode</th>
                                                       <th>startDate</th>
                                                       <th>endDate</th>
                                                       <th>description</th>
                                                       <th>room</th>
                    {meeting.map(m=> <tr key={m.meetingCode}> <td> {m.description}</td>
                                                              <td>{m.teamCode}</td> 
                                                              <td>{m.startDate}</td> 
                                                              <td> {m.endDate}</td>
                                                              <td>{m.room}</td> 
                      </tr>)}
                
                
            </table>

            {/* {meeting.map(f => <CardList key={f.furnitureId} furniture={f} />)} */}
            
        </div>
			
        </div>
    );
}

export default MeetingList;
