import { Component, OnInit } from '@angular/core';
import { Activity } from '../model-activity/activity';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../serviceActivity/activity.service';

@Component({
  selector: 'app-activityrated-list-byuser',
  templateUrl: './activityrated-list-byuser.component.html',
  styleUrls: ['./activityrated-list-byuser.component.css']
})
export class ActivityratedListByuserComponent implements OnInit {

  listRatedActivitiesbyuser! : Activity[]
  constructor(private route: ActivatedRoute, private monService: ActivityService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
    const idAsNumber = parseInt(id, 10);
    this.monService.getRatedActivitiesByIdUser(idAsNumber).subscribe(res=>{console.log(res);
      this.listRatedActivitiesbyuser=res});}
  }

}
