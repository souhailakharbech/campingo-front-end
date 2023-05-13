import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintServiceService {
  private apiUrl = 'http://localhost:8092/Campi/Complaint/complaints/sentiment';
  constructor(private http: HttpClient) { }

  getComplaintsBySentiments(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
