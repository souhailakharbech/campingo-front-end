import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../serviceActivity/activity.service';
import { Activity } from '../model-activity/activity';

@Component({
  selector: 'app-activity-suggest',
  templateUrl: './activity-suggest.component.html',
  styleUrls: ['./activity-suggest.component.css']
})
export class ActivitySuggestComponent implements OnInit {
  iduser=2;
  suggestedActivity!: Activity;

  constructor(private monService: ActivityService) { }

  ngOnInit(): void {
    // Récupérer une suggestion d'activité aléatoire en utilisant l'ID de l'utilisateur (ici, on utilise l'ID 1)
    this.monService.getRandomSuggestion(this.iduser).subscribe(activity => {
      this.suggestedActivity = activity;
  });
}



  

// onShowSuggestedActivity(iduser:number) {
//   this.monService.suggestActivity(this.iduser).subscribe(res=>{console.log(res);
//     this.activity=res});}
goBack() {
  window.history.back();
}

}
