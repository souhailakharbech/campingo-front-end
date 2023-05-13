import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../servicest/post.service';
import { Publication } from '../modelt/postes';
import { Reaction } from '../modelt/reactions';
import { Reactiontype } from '../modelt/reactiontype';
import { PostComments } from '../modelt/comments';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
listposts!: Publication[];
@Input() listpostsbyname!: Publication[];
  constructor(private PostService:PostService) { }
 
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


  ngOnInit(): void {
    this.PostService.getposts().subscribe(data=>{this.listposts=data;  console.log(this.listposts)});
    console.log(this.listpostsbyname);
  
  }


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
        window.location.reload();
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
  //** icon code */

  
  
 
}
  


