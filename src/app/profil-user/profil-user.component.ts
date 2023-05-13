
import { UserServiceService } from '../Services/user-service.service';
import { User } from '../Model/user';

import { EventEmitter } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.component.html',
  styleUrls: ['./profil-user.component.css']
})
export class ProfilUserComponent implements OnInit {
  userDetail !: number ; 
  user !: User;
 
  @Output() closeAll = new EventEmitter<boolean>();
  @Input() id! :number;
  
  constructor(private userService: UserServiceService,private acti :ActivatedRoute,public router: Router ,private route : ActivatedRoute ) { }
  userId ! : any;
 
  ngOnInit(): void {
    this.userDetail = this.id;
    this.userService.getUserById(localStorage.getItem('idUser')!).subscribe(
      (data: User) => this.user = data
    );

   
  }
  detailsUser(id : any):void{

  };
  deleteUser(user:User) {
    
    this.userService.deleteUser(parseFloat(localStorage.getItem('idUser')!)).subscribe(
      () => console.log('User deleted successfully'),
      error => console.error('Error deleting user:', error)
    );
  }


  
}
 
 
  

 

 

  


