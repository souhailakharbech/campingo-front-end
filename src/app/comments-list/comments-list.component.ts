import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../servicest/post.service';
import { Publication } from '../modelt/postes';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  postId!: number;
  post=new Publication();

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:any) => {
      this.postId = +params.get('id');
      this.postService.getPostById(this.postId).subscribe((post:any) => {
        this.post = post;
        console.log( this.post)
        console.log(this.postId)
      });
    });
  }



}
