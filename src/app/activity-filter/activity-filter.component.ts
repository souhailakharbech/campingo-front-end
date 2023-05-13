import { Component, OnInit } from '@angular/core';
import { Activity } from '../model-activity/activity';
import { ActivityService } from '../serviceActivity/activity.service';
import { ActivityType } from '../model-activity/activityType';

@Component({
  selector: 'app-activity-filter',
  templateUrl: './activity-filter.component.html',
  styleUrls: ['./activity-filter.component.css']
})
export class ActivityFilterComponent implements OnInit {

  listofActivities! : Activity[]
  activityType = ActivityType;
  selectedActivityType!: ActivityType;
  rate!: number;
  location!: string;
  activities: Activity[] = [];
  constructor(private service: ActivityService) {

   }

  ngOnInit(): void {
    
      

  }
  searchactivities(rate: number, location: string) {
    this.service.getActivityByFilter(this.selectedActivityType, rate, location)
      .subscribe(Activity => this.listofActivities = Activity);
      
  }

goBack() {
  window.history.back();
}
}
