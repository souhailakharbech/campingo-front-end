import { Component, OnInit } from '@angular/core';
import { Campsites } from '../Model/campsite';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicecampsiteService } from '../servicecampsite.service';
import { UserServiceService } from '../Services/user-service.service';
import { User } from '../Model/user';

@Component({
  selector: 'app-profil-client',
  templateUrl: './profil-client.component.html',
  styleUrls: ['./profil-client.component.css']
})
export class ProfilClientComponent implements OnInit {
  user !:User ;
  data: any;
  dataArray!: Campsites[];
  form: FormGroup[];

  constructor(private campsiteService: ServicecampsiteService, private fb: FormBuilder,private service :UserServiceService) {
    this.form = [];
  }

  ngOnInit(): void {
    this.campsiteService.getAllCampsite().subscribe(data => {
      this.dataArray = data;
      this.createForm();
    });
  }

  createForm() {
    for (let i = 0; i < this.dataArray.length; i++) {
      this.form.push(this.fb.group({
        rating: ['', Validators.required]
      }));
    }
  }
}


