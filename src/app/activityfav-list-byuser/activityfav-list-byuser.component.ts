import { Component, OnInit } from '@angular/core';
import { Activity } from '../model-activity/activity';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../serviceActivity/activity.service';

@Component({
  selector: 'app-activityfav-list-byuser',
  templateUrl: './activityfav-list-byuser.component.html',
  styleUrls: ['./activityfav-list-byuser.component.css']
})
export class ActivityfavListByuserComponent implements OnInit {

  listFavActivitiesbyuser! : Activity[]
  constructor(private route: ActivatedRoute, private monService: ActivityService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
    const idAsNumber = parseInt(id, 10);
    this.monService.getFavActivitiesByIdUser(idAsNumber).subscribe(res=>{console.log(res);
      this.listFavActivitiesbyuser=res});}
  }
}

