import { Component, OnInit } from '@angular/core';
import { PostService } from './../servicest/post.service';
import { Publication } from '../modelt/postes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editposts',
  templateUrl: './editposts.component.html',
  styleUrls: ['./editposts.component.css']
})
export class EditpostsComponent implements OnInit {
  toupdatepublication = new Publication();
 
  postId!: number;
  post: any;

  postDescription!:String;
 
  file!:File;
  constructor(private route: ActivatedRoute, private postService: PostService,private routes:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.postId = +params.get('id');
      this.postService.getPostById(this.postId).subscribe((post:any) => {
        this.post = post;
      });
    });
  }
  handleFileInput(event: any) {
    this.file = event.target.files[0];
    console.log('file',this.file)
  }
  onSubmitupdate(event: any) {
    //console.log(idp)
    event.preventDefault(); 

    const updatedpost={...this.toupdatepublication, content:this.postDescription,file:this.file,location:'l1', idpublication:this.postId}
    console.log(updatedpost)
    this.postService.editpost(updatedpost).subscribe((data:any)=>console.log(updatedpost));
  // window.location.reload();
  this.routes.navigate(["/myprofile"]);
}
}
