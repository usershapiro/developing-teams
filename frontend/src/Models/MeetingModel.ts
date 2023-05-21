
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

  

} 

export default MeetingModel