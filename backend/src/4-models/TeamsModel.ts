class TeamsModel {
    public teamCode : number
    public team: string
  

    public constructor (team:TeamsModel)  {
        this.teamCode = team.teamCode
        this.team = team.team
        
    }
}

export default TeamsModel