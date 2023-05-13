import { Component, OnInit } from '@angular/core';
import { Activity } from '../model-activity/activity';
import { ActivityService } from '../serviceActivity/activity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivityType } from '../model-activity/activityType';
import { Activitesaison } from '../model-activity/activiteSaison';

@Component({
  selector: 'app-activity-edit',
  templateUrl: './activity-edit.component.html',
  styleUrls: ['./activity-edit.component.css']
})
export class ActivityEditComponent implements OnInit {

  id:any;
  activity!:Activity;
  name!:string;
  description!:string;
  activityTypes = Object.values(ActivityType);
  seasons = Object.values(Activitesaison);


  constructor(private service:ActivityService,private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
     this.route.paramMap.subscribe((params:any) => {
      this.id = +params.get('id');
      this.service.getActivityById(this.id).subscribe((post:any) => {
        console.log("test")
        this.activity = post;
        
        this.name = post.name;
        this.description = post.description;
        this.activityTypes = post.activityTypes;
          this.seasons = post.seasons;
        
        console.log(this.activity)
  })
});
}
  
  // onEditActivity()
  // {

  // }

   updateactivity(activity:Activity) 
   {
     console.log(this.activity)
     this.service.editActivity(this.id, this.activity)
       .subscribe(
         updatedUser => {
           console.error('bara jawk behi');
           this.router.navigate(['/activity/edit/:id']);
        },
        error => {
          console.error(error);
        }
      );
  }
  goBack() {
    window.history.back();
}
  
  }

