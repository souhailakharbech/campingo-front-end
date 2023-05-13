import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User= new User();
  message : any ;
  constructor(public router: Router,private service:UserServiceService) { }

  ngOnInit(): void {
  }
  public loginNow(){
     // appel de la méthode login() du service userService avec les informations utilisateur
    let respp= this.service.login(this.user);
    respp.subscribe((data) => {
      this.message = data;
      console.log(data)
      
      
      localStorage.setItem('token',data.token);
     this.service.parseJwt();
      })
    };

   

  }

  

