import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from '../model-activity/activity';
import { ActivityType } from '../model-activity/activityType';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  

  constructor(private http:HttpClient) { 
    
  }

  getAllActivities():Observable<Activity[]>
  {
    return this.http.get<Activity[]>('http://localhost:8092/Campi/AUTH/auth/activity/retrieveAllActivity')
  }
  getActivitiesByIdCampsite(id:number):Observable<Activity[]>
  {
    return this.http.get<Activity[]>(`http://localhost:8092/Campi/AUTH/auth/activity/retrieveActivityBycampsite/${id}`)
  }
  getFavActivitiesByIdUser(id:number):Observable<Activity[]>
  {
    return this.http.get<Activity[]>(`http://localhost:8092/Campi/AUTH/auth/activity/retrieveFavActivityByUser/${id}`)
  }
  getRatedActivitiesByIdUser(id:number):Observable<Activity[]>
  {
    return this.http.get<Activity[]>(`http://localhost:8092/Campi/AUTH/auth/activity/retrieveActivitiesRatedByUser/${id}`)
  }
  deleteActivity(id:number)
  {
    return this.http.delete('http://localhost:8092/Campi/AUTH/auth/activity/deleteActivity/'+id)
        
  }
  addActivityAndAssignToOwner(id: number, objet: Activity): Observable<any> {
    return this.http.post(`http://localhost:8092/Campi/AUTH/auth/activity/addActivity/${id}`, objet);
  }
  editActivity(id:any,data:Activity):Observable<any>
  {
    return this.http.put<any>(`http://localhost:8092/Campi/AUTH/auth/activity/updateActivity/${id}`,data);
  }

  addActivityToFavorite(idActivity:number,iduser:number):Observable<any>
  {
    return this.http.post(`http://localhost:8092/Campi/AUTH/auth/activity/ajouterActiviteFavorites/${idActivity}/${iduser}`,null);

  }
  getRandomSuggestion(iduser: number):Observable<Activity>
  {
    return this.http.get<Activity>(`http://localhost:8092/Campi/AUTH/auth/activity/AlgorithmeDeSuggestionActivite/${iduser}`);

  }
  getActivityByFilter(activityType:ActivityType , rate:number ,location: String ):Observable<Activity[]>
  {
    return this.http.get<Activity[]>(`http://localhost:8092/Campi/AUTH/auth/activity/filter?location=${location}&activityType=${activityType}&rate=${rate}`); 

  }

  addingActivitiyRate(idActivity:number,iduser:number,Object:number):Observable<any>
  {
    return this.http.post(`http://localhost:8092/Campi/AUTH/auth/rate/addRating/${idActivity}/${iduser}`,Object);
  }
  getActivityById(id:any):Observable<Activity>
  {
    return this.http.get<Activity>(`http://localhost:8092/Campi/AUTH/auth/activity/retrieveActivity/${id}`);
  }
  
  
}
