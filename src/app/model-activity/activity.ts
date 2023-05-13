import { Activitesaison } from "./activiteSaison";
import { ActivityType } from "./activityType";

export class Activity
{
     idActivity!:number;
      name!:String;
      rate!:number;
      description!:String;
      ActivityType!: ActivityType
      Activitesaison!: Activitesaison;
}