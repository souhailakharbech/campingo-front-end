import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/user';
import { UserServiceService } from 'src/app/Services/user-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
 
  users : User[]=[];
  user ! :any;
  i !: number ; 
 ListUsers !:Observable<any>;
 days ! : number ;
  constructor(public router: Router,private service:UserServiceService) { 
    let usersObserv: Observable<User[]>;
    usersObserv=this.service.getUsers();
    usersObserv.subscribe((req )=>{
      this.users=req;
    })
  }
  reloadData(){
    this.reloadData();
   }

  ngOnInit(): void {
    this.service.getUsers().subscribe(data => {
      this.users = data;
    });
  }
  blockUser(user: User) {
    // Vérifier si user et user.userId sont définis
    if (user && user.idUser) {
      this.service.banUser(user.idUser, 30).subscribe(
        user => {
          console.log('user block')
          this.ngOnInit();
         // console.log(`User ${user.idUser} has been blocked for ${this.days} days`);
          // Do any additional handling of the response here
         // window.location.reload();
        },
        error => {
          console.log(error);
        }
      );
    } else {
      console.log("User or user ID is undefined.");
    }
    console.log()
  }
  
  

 /* blockUser(user:User) {
    this.service.banUser(user.userId,30)
      .subscribe(
        user => {
          console.log(`User ${user.userId} has been blocked for ${this.days} days`);
          // Do any additional handling of the response here
          window.location.reload();
        },
  
      );
  
  }*/

}
