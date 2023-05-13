import { Component, OnInit } from '@angular/core';
import { ServicecampsiteService } from '../servicecampsite.service';
import { Campsites } from '../Model/campsite';
import { UserServiceService } from '../Services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcampsite',
  templateUrl: './addcampsite.component.html',
  styleUrls: ['./addcampsite.component.css']
})
export class AddcampsiteComponent implements OnInit {

  location: string = "";
  name: string = "";
  description: string = "";
  id!: number; // Définir id comme étant de type number
  
  campsites = new Campsites();
  showSuccessModal: boolean = false;
  
  constructor(private campsiteService: ServicecampsiteService,private service:UserServiceService,public router: Router) { }
  
  ngOnInit(): void {
  }
  
  onSubmit() {
    const idUser = parseInt(localStorage.getItem('idUser')!); 
    const data = {...this.campsites, location: this.location, name: this.name, description: this.description};
    console.log(data);
  
    
    this.campsiteService.addCampsitesAndAssignOwner(idUser, data)
      .subscribe(data => console.log(data));
      this.router.navigate(['/profilUser']);
  //  alert("The campsite has been added successfully!");
  //  window.location.reload();
    
  };
  
  

} 
