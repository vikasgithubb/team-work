import { members } from './members';

export interface fromdatapo {

  team:{
    teamid: number;
    teamname: string;
    description: String;
    teammates: [{id: number, teamid: number}];
  }
      
    
}