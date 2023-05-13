import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../serviceActivity/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from '../model-activity/activity';


@Component({
  selector: 'app-activity-list-bycamp',
  templateUrl: './activity-list-bycamp.component.html',
  styleUrls: ['./activity-list-bycamp.component.css']
})
export class ActivityListBycampComponent implements OnInit {
  activity :any;
  showEditForm = false;
  showActivityAddComponent = false;
  listActivitiesbycamp! : Activity[]
  id:any;
  constructor(private route: ActivatedRoute, private monService: ActivityService,private router:Router) {
    //this.activity = this.monService.get;
   }
  onAddActivity(): void {
    this.showActivityAddComponent = true;
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
    const idAsNumber = parseInt(id, 10);
    this.monService.getActivitiesByIdCampsite(idAsNumber).subscribe(res=>{console.log(res);
      this.listActivitiesbycamp=res});}

      
  }

  onDeleteActivity(id: number) {
    console.log('Le clic sur l icône est actif.');
    this.monService.deleteActivity(id).subscribe(() => {
       // supprimer l'activité de la liste d'activités
       console.log("La fonction onDeleteActivity() a été appelée avec l'ID " + id);
      this.listActivitiesbycamp = this.listActivitiesbycamp.filter(activity => activity.idActivity !== id);
    });
  }
  
  

}
