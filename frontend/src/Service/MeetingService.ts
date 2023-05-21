
import axios from "axios"
import appConfig from "../Utils/Config"


import TeamsModel from "../Models/TeamsModel"
import MeetingModel from "../Models/MeetingModel"
class MeetingService {

    public async getMeetingByTeam(teamCode:number):Promise <MeetingModel[]>{
      const response = await axios.get<MeetingModel[]>(appConfig.meetingByTeamUrl+teamCode)
       const meetingByTeam = response.data
       return meetingByTeam
    }

    public  async  getAllTeams():Promise <TeamsModel[]>{
        const response = await axios.get<TeamsModel[]>(appConfig.teamsUrl)
        const types = response.data
        return types
      }

   public async addMeeting(meeting:MeetingModel):Promise<void>{
     await axios.post<MeetingModel>(appConfig.addMeeting,meeting)
   }
}

const meetingService = new MeetingService()
export default meetingService