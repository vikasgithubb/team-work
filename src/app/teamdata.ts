export interface Teamdata {
    teamid: number;
    teamname: string;
    description: string;
    teammates: any[]; // You can replace 'any[]' with a specific type if teammates have a defined structure
  }