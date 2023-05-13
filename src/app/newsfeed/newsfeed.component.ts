import { Component, Input, OnInit, Output } from '@angular/core';
import { Publication } from '../modelt/postes';
import { PostService } from './../servicest/post.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  searchQuery: string = '';
   listpostsbyname!: Publication[];
   toaddpublication=new Publication();

file:any;
postDescription!:string;

  constructor(private PostService:PostService,private route:Router) { }

  ngOnInit(): void {
  }
 
  onSearch() {
    this.PostService.getpostsbyword(this.searchQuery).subscribe(data=>{this.listpostsbyname=data;  console.log(this.listpostsbyname);});

    // Do something with the search query
    console.log(this.searchQuery);
  
   
  }


//add post 


  // Send the form data to your backend API using a POST request
  handleFileInput(event: any) {
    this.file = event.target.files[0];
    console.log('file',this.file)
  }
  /*onSubmit(): false | undefined  {
    const forbiddenWords = ['w3', 'w2', 'w1']; // List of forbidden words
    const description = this.postDescription.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (forbiddenWords.some(word => description.includes(word))) { // Check if any of the forbidden words are in the description
      alert('The post contains forbidden words.'); // Show alert message
      return false; // Prevent form submission
    }else{
    const updatedpost={...this.toaddpublication, content:this.postDescription,file:this.file,id:1,location:'l1'};
    console.log(updatedpost);
    this.PostService.addpost(updatedpost).subscribe(datat=>console.log(updatedpost));
    this.route.navigate(['/newfeed']).then(() => {
      window.location.reload();
    });
  }
    return undefined;
  }*/


  onSubmit(event: any): boolean {
    event.preventDefault(); 
    const forbiddenWords = ['w3', 'w2', 'w1']; // List of forbidden words
    const description = this.postDescription.toLowerCase(); // Convert to lowercase for case-insensitive comparison
    if (forbiddenWords.some(word => description.includes(word))) { // Check if any of the forbidden words are in the description
      alert('The post contains forbidden words.'); // Show alert message
      return false; // Prevent form submission
    } else {
      const updatedpost={...this.toaddpublication, content:this.postDescription,file:this.file,id:1,location:'l1'};
      console.log(updatedpost);
      this.PostService.addpost(updatedpost).subscribe(datat=>console.log(updatedpost));
      window.location.reload();
    /*  this.route.navigate(['/newfeed']).then(() => {
        window.location.reload();
      });*/
      return true; // Allow form submission
    }
  }

  gotomyposts(){
this.route.navigate(["/myprofile"]);
  }















}
