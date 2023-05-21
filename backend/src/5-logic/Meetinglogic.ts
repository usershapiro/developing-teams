import { OkPacket } from "mysql"
import dal from "../2-utils/dal"
import MeetingModel from "../4-models/MeetingModel"
import TeamsModel from "../4-models/TeamsModel"

async function getAllTeams() :Promise <TeamsModel[]> {
    const sql = `SELECT * from teams `
  const teams = await dal.execute(sql);
  
  return teams
}


async function getMeetingByTeamCode(teamCode:number) :Promise <MeetingModel[]> {
    const sql= `
    SELECT M.*,T.team
     FROM meetings AS M JOIN teams AS T
     ON M.teamCode= T.teamCode 
     WHERE M.teamCode = ?;
    `;
      const meetingByCode = await dal.execute(sql,[teamCode])
      return meetingByCode
    }

   
      async function addMeeting(meeting:MeetingModel):Promise <MeetingModel> {
        const sql = `
        INSERT INTO meetings 
        VALUES (  DEFAULT,
           ?,
           ?,
           ?,
           ?,
           ?
           )`;
      
           const info:OkPacket = await dal.execute(sql,[meeting.teamCode,meeting.startDate,meeting.endDate,meeting.description,meeting.room])
      
           meeting.meetingCode = info.insertId
      
           return meeting
      
      }
  

export default{
getAllTeams,  
getMeetingByTeamCode ,
addMeeting
}