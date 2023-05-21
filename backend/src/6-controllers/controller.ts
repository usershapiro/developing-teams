import express, { Request, Response, NextFunction } from "express"
import Meetinglogic from "../5-logic/Meetinglogic"
import MeetingModel from "../4-models/MeetingModel"

const router = express.Router()

//listen on http://localhost:3001/api/teams        
router.get("/teams" , async(request:Request , response:Response , next:NextFunction)=>{
try{
   const teams = await Meetinglogic.getAllTeams()
   console.log(teams)
   response.json(teams)
}
catch(err:any){
    next(err)
}
})

//listen on http://localhost:3001/api/meeting-by-teamCode/:teamCode
router.get("/meeting-by-teamCode/:teamCode",async(request:Request , response:Response , next:NextFunction)=>{
    try{
     const teamCode = +request.params.teamCode
     const meetingByCode = await Meetinglogic.getMeetingByTeamCode(teamCode)
     response.json(meetingByCode)
    }
    catch(err:any){
     next(err);
    }
 
 })
 //listen on http://localhost:3001/api/meeting
router.post("/meeting" , async(request:Request , response:Response , next:NextFunction)=>{
    try{
      const meeting = new MeetingModel(request.body)
      const addedMeeting = await Meetinglogic.addMeeting(meeting)
      response.status(201).json(addedMeeting)
    }
    catch(err:any){
      next(err);
    }
  
  
  }) 








export default router