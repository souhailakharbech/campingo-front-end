import { Component, OnInit } from '@angular/core';
import { Complaint } from '../Model/complaint';
import { ComplaintServiceService } from '../complaint-service.service';

@Component({
  selector: 'app-list-complaints',
  templateUrl: './list-complaints.component.html',
  styleUrls: ['./list-complaints.component.css']
})
export class ListComplaintsComponent implements OnInit {
  complaints!: Complaint[];
  constructor(private complaintService : ComplaintServiceService) { }

  ngOnInit(): void {
    this.complaintService.getComplaintsBySentiments().subscribe(complaints => this.complaints = complaints);
  }

}
