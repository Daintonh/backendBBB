import { Component, OnInit, ElementRef, ViewChild, Input } from '@angular/core';
// import {GoogleMapsService} from 'google-maps-angular2';

@Component({
    moduleId: module.id,
    selector: 'googleMaps',
    templateUrl: 'googleMaps.component.html',
    styleUrls: ['googleMaps.component.css']

})

export class GoogleMapsComponent implements OnInit {  

    zoom: number = 15;
    
    title: string = 'Our Locations';
    lat: number = 53.344885;
    lng: number = -6.262755;

     @Input() scrollwheel: boolean = false;
 
    private map: any;
 
    // constructor(private gapi: GoogleMapsService) {
    // }
 
    ngOnInit() {
        // this.map.scrollwheel = false;
        // this.map = scrollwheel:  false
        // this.map.disableScrollWheelZoom();
    // this.map = {
    //     options: {
    //     scrollwheel: false
    //         }
    //     };
      
}

clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
    
  }
  
//   mapClicked($event: MouseEvent) {
//     // this.markers.push({
//     //   lat: $event.coords.lat,
//     //   lng: $event.coords.lng
//     // });
//   }

//   mapClicked($event: MouseEvent) {
//     this.markers.push({
//       lat: $event.coords.lat,
//       lng: $event.coords.lng
//     });
//   }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }
  
  markers: marker[] = [
	  {
		  lat: 53.344885,
          lng: -6.262755,
		  label: 'A',
		  draggable: false
	  }
  ]
}
// just an interface for type safety.
interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}
