import { User } from "../Model/user";
import { PostComments } from "./comments";
import { Picture } from "./pictures";
import { Reaction } from "./reactions";

export class Publication {

    idpublication:number=0; 
    datepublication!: Date;
    isarchived!:boolean;
    content!:string;
    location!:string;
    pictures!:Picture;
    reaction!:Reaction;
    user!:User;
    file!:File;
    postComments!: PostComments[];
    icons!: {
        name: string,
        isClicked: boolean
      }[];
    
      constructor() {
        this.idpublication = 0;
        this.icons = [
          {
            name: 'heart',
            isClicked: false
          },
          {
            name: 'thumbsDown',
            isClicked: false
          },
          {
            name: 'thumbsUp',
            isClicked: false
          }
        ];
      }
   }
    