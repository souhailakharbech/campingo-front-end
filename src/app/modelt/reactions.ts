import { Publication } from "./postes";
import { Reactiontype } from "./reactiontype";

export class Reaction {

    idreaction!:number; 
    datereaction!: Date;
    iduser!:number;
    location!:string;
    reactiontype!:Reactiontype;
    publications !:Publication;


   
   }
 
  