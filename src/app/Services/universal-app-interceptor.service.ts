import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversalAppInterceptorService implements HttpInterceptor{

  constructor(private router: Router) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token= localStorage.getItem('token');
    if(token== null){
      let headers = new HttpHeaders({
        'Acces-Control-Allow-Origin':'*',
        'Acces-Control-Allow-Headers':'Content-Type',
        'Acces-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT'
      });
      const clonedRequest = req.clone({headers:headers});
      return next.handle(clonedRequest).pipe( tap(() => {},
      (err: any) =>{
  
      }
      )
      )
    }else{
      let headers = new HttpHeaders({
        'Acces-Control-Allow-Origin':'*',
        'Acces-Control-Allow-Headers':'Content-Type',
        'Acces-Control-Allow-Methods':'GET,POST,OPTIONS,DELETE,PUT',
        'Authorization':`Bearer ${token}`
      });
      const clonedRequest = req.clone({headers:headers});
      return next.handle(clonedRequest).pipe( tap(() => {},
      (err: any) =>{
        if(err.status ==500){
          localStorage.clear();
          this.router.navigate(['/home/login']);
        }
      }
      )
      )
    }
    
  }
}
