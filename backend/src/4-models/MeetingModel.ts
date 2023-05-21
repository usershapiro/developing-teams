import Joi from "joi"

class MeetingModel {
   public meetingCode:number
   public teamCode:number	
   public startDate: string
   public endDate: string	
   public description	: string
   public room : string

   public constructor (meeting:MeetingModel) {
    this.meetingCode = meeting.meetingCode;
    this.teamCode = meeting.teamCode;
    this.startDate = meeting.startDate;
    this.endDate = meeting.endDate;
    this.description = meeting.description;
    this.room = meeting.room
   }

   public static validationScheme = Joi.object({
    meetingCode:Joi.number().optional().positive().integer(),
    teamCode:Joi.number().optional().positive().integer(),
    startDate :Joi.required(),
    endDate:Joi.required(),
    description:Joi.string().required().min(2).max(150),
    room:Joi.string().required().min(2).max(30)
   })
   public validate():string{
      const result = MeetingModel.validationScheme.validate(this)
      return result.error?.message;
   }

} 

export default MeetingModel