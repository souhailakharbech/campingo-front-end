import { AfterViewInit, Component, OnInit, Output } from '@angular/core';
import * as L from 'leaflet';
import { EventEmitter } from 'stream';
import { Campsites } from '../modelCampsite/campsite';
import { PostService } from './../servicest/post.service';
import { OneUserWish } from '../modelt/onuserwish';
@Component({
  selector: 'app-mapscomponent',
  templateUrl: './mapscomponent.component.html',
  styleUrls: ['./mapscomponent.component.css']
})
export class MapscomponentComponent  implements AfterViewInit {
 // @Output() locationClicked = new EventEmitter<{lat: number, lng: number}>();
campsites!: Campsites[];
userwish=new OneUserWish();
selectedCampsiteId!:String;
id=1;
constructor(private ps: PostService) {}
  ngAfterViewInit(): void {
    // get user's current location
    navigator.geolocation.getCurrentPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      // create map centered on user's location
      const mymap = L.map('map').setView([latitude, longitude], 13);

      // add tile layer to map
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        maxZoom: 18,
      }).addTo(mymap);
      mymap.on('click', (e: L.LeafletMouseEvent) => {
        const lat = e.latlng.lat;
        const lng = e.latlng.lng;
        console.log(lat,lng);
        this.ps.getnearestcampsite(lat,lng).subscribe((data:any)=>{this.campsites=data;  console.log(this.campsites)});;

      });
    });
  }
  adduserwish() {
    const selectedCampsite = this.campsites.find(campsite => campsite.name === this.selectedCampsiteId);
    if (selectedCampsite) {
      console.log(selectedCampsite.location);
      this.userwish.location = selectedCampsite.location;
      this.ps.adduserwish(this.userwish, this.id).subscribe((data: any) => {
        console.log(this.userwish);
      });
    } else {
      console.log('Selected campsite not found');
    }
  }
  
}


