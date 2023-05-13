import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Reaction } from '../modelt/reactions';
import { Publication } from '../modelt/postes';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrlget = 'http://localhost:8095/Campi/AUTH/auth/Publication/retrieve-all-Publication';
  private apiUrladd = 'http://localhost:8095/Campi/AUTH/auth/Publication/add-Publication';
 
  constructor(private http :HttpClient) { }
//************************************* posts >_<         ************************************************ */
  getposts (): Observable<any> {
    return this.http.get( this.apiUrlget)
  }
  getpostsbyid (id:number): Observable<any> {
    return this.http.get( `http://localhost:8095/Campi/AUTH/auth/Publication/retrieve-Publication/${id}`)
  }
  getPostById(id: number) : Observable<Object> {
    return this.http.get<Object>(`http://localhost:8095/Campi/AUTH/auth/Publication/retrieve-Publication/${id}`);
  }
  getpostsbyword (text:string): Observable<any> {
    return this.http.get(`http://localhost:8095/Campi/AUTH/auth/Publication/hashtag?hashtag=${text}`)
  }
 delletepost (id:any): Observable<any> {
    return this.http.delete(`http://localhost:8095/Campi/AUTH/auth/Publication/remove-Publication/${id}`)
  }
 // content:string,location:string,pictures:File
 addpost(postContent: any): Observable<any> {
  const postContent2 = new FormData();
  postContent2.append('content', postContent.content);
  postContent2.append('location', postContent.location);
  //postContent2.append('file', postContent.file);
  if (postContent.file) {
    postContent2.append('file', postContent.file);
  } else {
    const emptyBlob = new Blob([], { type: 'application/octet-stream' });
    postContent2.append('file', emptyBlob, 'empty');
  }
  postContent2.append('id', postContent.id.toString());
  return this.http.post<any>(this.apiUrladd, postContent2).pipe(
    catchError(error => {
      console.error('An error occurred:', error);
      return throwError('Something bad happened; please try again later.');
    })
  );
}

editpost(postContent: any): Observable<any> {
  const postContent2 = new FormData();
  postContent2.append('idpublication', postContent.idpublication);
  postContent2.append('content', postContent.content);

  if (postContent.file) {
    postContent2.append('file', postContent.file);
  } else {
    const emptyBlob = new Blob([], { type: 'application/octet-stream' });
    postContent2.append('file', emptyBlob, 'empty');
  }
 
  return this.http.put<any>(`http://localhost:8095/Campi/AUTH/auth/Publication/update-Publication`, postContent2).pipe(
    catchError(error => {
      console.error('An error occurred:', error);
      return throwError('Something bad happened; please try again later.');
    })
  );
}
//**************************************  the comments :)   ******************************************************* */
addcmtr(postContent: any): Observable<any> {
  const postContent2 = new FormData();
  postContent2.append('content', postContent.content);
  
  const idpost=postContent.idpost;
  const iduser= postContent.iduser;
  return this.http.post<any>(`http://localhost:8095/Campi/AUTH/auth/PostComments/add-PostComments/${idpost}/${iduser}`, postContent2).pipe(
    catchError(error => {
      console.error('An error occurred:', error);
      return throwError('Something bad happened; please try again later.');
    })
  );


  }
  //*******************************************  reaction service -_-  ******************* */

  addReaction(post_id: number,user_id :number, reaction: any): Observable<Reaction> {
    const url = `http://localhost:8095/Campi/AUTH/auth/Reaction/add-Reaction/${post_id}/${user_id}`;
    return this.http.post<Reaction>(url, reaction);
  }

  deleteReaction(reactionnid: number): Observable<void> {
    const url = `http://localhost:8095/Campi/AUTH/auth/Reaction/remove-Reaction/${reactionnid}`;
    return this.http.delete<void>(url);
  }
  getReactionsForPost(postId: number): Observable<Reaction[]> {
    const url = `http://localhost:8095/Campi/AUTH/auth/Reaction/retrieve-reactions-by-post/${postId}`;
    return this.http.get<any>(url);
  }
  //***************************** oneuserwish *************************************************** */


  
  getnearestcampsite (lat:any,lon:any): Observable<any> {
    return this.http.get(`http://localhost:8095/Campi/AUTH/auth/oneuserwish/findNearestCampsites?lat=${lat}&lon=${lon}&radius=5.0`)
  }
  adduserwish(userwish: any,iduser:any): Observable<any> {
    
    return this.http.post<any>(` http://localhost:8095/Campi/AUTH/auth/oneuserwish/add-OneUserWish/${iduser}`, userwish).pipe(
      catchError(error => {
        console.error('An error occurred:', error);
        return throwError('Something bad happened; please try again later.');
      })
    );
  
  
    }

}
