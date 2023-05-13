import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../Model/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
 // sender! : User;
  private apiUrl = 'http://localhost:8092/Campi/AUTH/auth/register';
 
 
  
  constructor(private http: HttpClient, private router: Router) { }
  
 

   public register(user : User ): Observable<User>{
   return this.http.post<User>(this.apiUrl, user); 
   
  }
  getUsers() :Observable<User[]> {
    return this.http.get<User[]>('http://localhost:8092/Campi/User/gettAllUsers');
  }
 
  getUserById(id : any):Observable<User>{
    return this.http.get<User>('http://localhost:8092/Campi/User/FindbyIdUser/'+id) ;
  
  }

    
banUser(idUser: number, days: number): Observable<User> {
  const url = `http://localhost:8092/Campi/User/banUser/${idUser}/${days}`;
  return this.http.get<User>(url);
}


 
  deleteUser(idUser: number): Observable<any> {
    return this.http.delete(`${this.API_URL1}/UserDelete/${idUser}`);
  }

  
 
  private API_URL1 = 'http://localhost:8092/Campi/User';
  updateUser(idUser: any , user :User): Observable<User> {
    return this.http.put<User>(`${this.API_URL1}/UserUpdate/${idUser}`, user);
  }

 
 
 
 

     

  public login(user : User ): Observable<any>{
    return this.http.post<any>('http://localhost:8092/Campi/AUTH/auth/authenticate', user); 
   }

   parseJwt(){
    const jwtHelper = new JwtHelperService();
    const objJwt= jwtHelper.decodeToken(localStorage.getItem('token')!);
    localStorage.setItem('idUser',objJwt.id)
    console.log(objJwt);
    if(objJwt.role=='OWNER' || objJwt.role=='CLIENT'){
      this.router.navigate(['/home/profilUser'])
    }
    else{
      this.router.navigate(['/admin'])
    }

   }



  
   
}
 