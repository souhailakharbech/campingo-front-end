import { Component, OnInit } from '@angular/core';
import { Activity } from '../model-activity/activity';
import { ActivityService } from '../serviceActivity/activity.service';
import { ActivityType } from '../model-activity/activityType';
import { Activitesaison } from '../model-activity/activiteSaison';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  
  name: string = "";
  description: string = "";
  id= 1;
  activity=new Activity;
  activityTypes = Object.values(ActivityType);
  seasons = Object.values(Activitesaison);

  constructor(private service:ActivityService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    
    const objet={...this.activity,type:this.activityTypes,name:this.name,description:this.description,season: this.seasons}
   console.log(objet)
   this.service.addActivityAndAssignToOwner(this.id,objet).subscribe(datat=>console.log(objet));
   alert("The activity has been added successfully!");
   window.location.reload();



  };
  goBack() {
    window.history.back();
}
  

}
