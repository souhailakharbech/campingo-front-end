import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../serviceActivity/activity.service';
import { Activity } from '../model-activity/activity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {
  showActivitysuggestcomponent=false; 
  idutilisateur=3;
  isAddedToFavorites = false;
  
  rate!: number;
  selectedRate!: number;
  
  
  
  listActivities! : Activity[]
  constructor(private service:ActivityService,private router: Router)
   
  {
   
   }
   
   
   

  ngOnInit(): void {
    this.service.getAllActivities().subscribe(res=>{console.log(res);
      this.listActivities=res});
  }
   
  // onDeleteActivity(id: number) {
  //   console.log('Le clic sur l icône est actif.');
  //   this.share.deleteActivity(id).subscribe(() => {
  //      // supprimer l'activité de la liste d'activités
  //      console.log("La fonction onDeleteActivity() a été appelée avec l'ID " + id);
  //     this.listActivities = this.listActivities.filter(activity => activity.idActivity !== id);
  //   });
  // }
  onAddActivityToFavorites(idActivity:number,idutilisateur:number)
  { 
    this.service.addActivityToFavorite(idActivity,this.idutilisateur).subscribe((res)=>{
      console.log(res);
      this.listActivities=res;
      this.isAddedToFavorites = true; // définit la variable sur true une fois que l'activité est ajoutée aux favoris
      alert("The activity has been added successfully to your favorites!");

      window.location.reload();
    });
  }

  rateActivity(idActivity: number, idutilisateur: number, rate: number) {
    this.service.addingActivitiyRate(idActivity, idutilisateur, rate)
      .subscribe(data => {
        console.log('Rate added successfully');
        // Mettre à jour la note de l'activité correspondante
        const activity = this.listActivities.find(a => a.idActivity === idActivity);
        if (activity) {
          activity.rate = rate;
        }
      });
  }

  onSuggestActivity() {
    this.router.navigate(['/activity/suggest, id']);
  }
  
}
