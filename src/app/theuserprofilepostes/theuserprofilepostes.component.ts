import { Component, OnInit } from '@angular/core';
import { Publication } from '../modelt/postes';
import { PostService } from '../servicest/post.service';
import { PostComments } from '../modelt/comments';
import { Reaction } from '../modelt/reactions';
import { Reactiontype } from '../modelt/reactiontype';
import { Observable, tap } from 'rxjs';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-theuserprofilepostes',
  templateUrl: './theuserprofilepostes.component.html',
  styleUrls: ['./theuserprofilepostes.component.css']
})
export class TheuserprofilepostesComponent implements OnInit {
  listposts!: Publication[];
  constructor( private PostService:PostService) { }
  id=1;
  toupdatepublication = new Publication();
  commntr = new PostComments;
  postDescription!:String;
  idpost:any;
  file!:File;
  reaction = new Reaction();
  reactions : Reaction[]=[];
  reactiontypes!:Reactiontype;
  currentPublicationId!:number;
  //****var cmtr */
inputcmtr:any;
//reactionbyiduser = new Reaction();

  ngOnInit(): void {
    //get all postes
    this.PostService.getpostsbyid(this.id).subscribe((data:any)=>{this.listposts=data;  console.log(this.listposts)});
  
  }
  handleFileInput(event: any) {
    this.file = event.target.files[0];
    console.log('file',this.file)
  }
  
  //update poste
 /* onSubmit(idp:any) {
    console.log(idp)
    const updatedpost={...this.toupdatepublication, content:this.postDescription,file:this.file,location:'l1', idpublication:idp}
    console.log(updatedpost)
    this.PostService.editpost(updatedpost).subscribe((data:any)=>console.log(updatedpost));
  window.location.reload();
}*/
//delete posts
delete(id:any){
  this.PostService.delletepost(id).subscribe((data:any)=>console.log(id));
  window.location.reload();
}
//add comments
onSubmitcmd(id:any) {
  const updatedpost={...this.commntr, content:this.inputcmtr, iduser:this.id,idpost:id}
  console.log(updatedpost)
  this.PostService.addcmtr(updatedpost).subscribe((data:any)=>console.log(updatedpost));
 window.location.reload();
}
// reaction 



 onLikeButtonClicked(postId: number, reactiontypeinput: string) {
  this.getReactionsForPost(postId)
  console.log(this.reactions,"**********************55")
  if (reactiontypeinput == 'like') {
    this.reactiontypes = Reactiontype.LIKE;
  } else if (reactiontypeinput == 'dislike') {
    this.reactiontypes = Reactiontype.DISLIKE;
  } else {
    this.reactiontypes = Reactiontype.LOVE;
  }

  if (!this.reaction.publications) {
    this.reaction.publications = new Publication();
  }
  
  this.reaction.publications.idpublication =postId;
  this.reaction.reactiontype = this.reactiontypes;

  console.log(postId, this.reactiontypes, this.reaction, postId ,'*****' );
  const reactionbyiduser=this.getReactionByUserIdAndPostId(this.id,postId);
 
 // this.getReactionsForPost(postId, () => { console.log(this.reactions); // The data is now available

  if (  this.hasUserLikedPost(postId)&& this.reactiontypes==reactionbyiduser?.reactiontype) {
    // User has already liked the post, so delete the reaction
    this.PostService.deleteReaction(postId).subscribe(() => {
      // Update the list of reactions in the UI
      this.getReactionsForPost(postId);
  
    });
  } else {
    // User has not yet liked the post, so add the reaction or reactiontype changed
    const newReaction = new Reaction();
    newReaction.reactiontype = this.reactiontypes ;
    console.log(   this.reactions ,"before adiing"     )
    this.PostService.addReaction(postId,this.id ,newReaction).subscribe(() => {
      // Update the list of reactions in the UI

      this.getReactionsForPost(postId);
      console.log(   this.reactions ,"after adiing"     )
     // window.location.reload();
    });
  }
}

hasUserLikedPost(postId: number): boolean {
  // Check if the user has already liked the post
  return this.reactions.some(r => r.publications.idpublication === postId &&  r.iduser === this.id);
}
getReactionByUserIdAndPostId(userId: number, postId: number): Reaction | null {
  // Find the reaction for the given user and post
  console.log(this.reactions)
  const reaction = this.reactions.find(r => r.publications && r.publications.idpublication === postId && r.iduser === userId);

  if (reaction) {
    return reaction;
  } else {
    return null;
  }
}


getReactionsForPost(postId: number): void {
  console.log('Getting reactions for post with ID:', postId);

  // Get the list of reactions for the given post
  this.PostService.getReactionsForPost(postId).subscribe((data:any) => {
    console.log('Response data:', data);

    this.reactions = data;
    console.log('Reactions for post with ID', postId, ':', this.reactions); // The data is now available
  });
}

}
