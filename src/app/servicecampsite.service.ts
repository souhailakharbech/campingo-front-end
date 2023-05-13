import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Campsites } from './Model/campsite';

@Injectable({
  providedIn: 'root'
})
export class ServicecampsiteService {

  
  public search = new BehaviorSubject<any>([]);

  


  private apiUrl = 'http://localhost:8092/Campi/DetailCampsites/getAllCampsite';

  private apiUrladd = 'http://localhost:8092/Campi/DetailCampsites/add-Campsites/${id}';

  private apiUrlUpdate = 'http://localhost:8092/Campi/DetailCampsites/CampsitetUpdate';
   
  private apidel='http://localhost:8092/Campi/DetailCampsites';

  private baseUrl = 'http://localhost:8092/Campi/DetailCampsites';



  constructor(private http: HttpClient) { }

  getAllCampsite(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addCampsitesAndAssignOwner(id: any, data: Campsites): Observable<any> {
   
    return this.http.post<any>(`http://localhost:8092/Campi/DetailCampsites/add-Campsites/${id}`, data);
  }



  getAverageRating(id :any){
    return this.http.get<any>(`http://localhost:8092/Campi/DetailCampsites/campsiteAverage/`+id)
      .pipe(map((res:any)=>{
        return res;
      }))
  }

  UpdateCampsite(id: any, data: Campsites): Observable<any> {
   
    return this.http.put<any>(`http://localhost:8092/Campi/DetailCampsites/CampsitetUpdate/${id}`, data);
  }


  DeleteCampsite(id: number){
    return this.http.delete(`http://localhost:8092/Campi/DetailCampsites/CampsiteDelete/`+id);
}


deletecampsite22(IdCampsite: any) {
  return this.http.delete(`http://localhost:8092/Campi/DetailCampsites/CampsiteDelete/${IdCampsite}`);
}




getcampsiteById(id: any): Observable<Campsites> {
  return this.http.get<Campsites>(`http://localhost:8092/Campi/DetailCampsites/FindByIdCampsites/${id}`);
  
}


filterCampsites(location: string, name: string, rate: number): Observable<Campsites[]> {
  let params = new HttpParams();
  if (location) {
    params = params.set('location', location);
  }
  if (name) {
    params = params.set('name', name);
  }
  if (rate) {
    params = params.set('rate', rate.toString());
  }
  return this.http.get<Campsites[]>(`${this.baseUrl}/filter`, { params });
}





  


}
