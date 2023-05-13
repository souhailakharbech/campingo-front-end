import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../Services/user-service.service';
import { User } from '../Model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profil-user',
  templateUrl: './edit-profil-user.component.html',
  styleUrls: ['./edit-profil-user.component.css']
})
export class EditProfilUserComponent implements OnInit {
  user!: User;
  idUser: any;
  constructor(private userService: UserServiceService ,private router : Router) { }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe(
      (user: User) => {
        this.user = user;
      }
    );
  }
  

  updateUser() {
    // console.log(parseFloat(localStorage.getItem('idUser')));
     this.userService.updateUser(parseFloat(localStorage.getItem('idUser')!), this.user)
       .subscribe(
         updatedUser => {
           console.error('update done');
           this.router.navigate(['/home/profilUser']);
         },
         error => {
           console.error(error);
         }
       );
   }    

}
