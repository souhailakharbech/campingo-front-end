import { Component, OnInit } from '@angular/core';
import { User } from '../Model/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';
import { UserType } from '../Model/userType';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  user: User= new User();
  message:any;
   owner: any = UserType.Owner;
  client: any= UserType.Client;
 admin : any=UserType.Admin;
  
  constructor(public router: Router,private service:UserServiceService) { }

  ngOnInit(): void {
  }
  public registerNow(){
    console.log('user', this.user);
 //   this.user.userType=UserType.Client;
    let resp = this.service.register(this.user);
    resp.subscribe((data) => {
      this.message = data;

      console.log(data)
      var userLogin= new User();
      userLogin.email=this.user.email;
      userLogin.password= this.user.password;
      this.service.login(userLogin).subscribe(res=>{
        console.log(res);

        
        localStorage.setItem('token',res.token);
        this.service.parseJwt();
      })
    });

  }

}
