import { Component, OnInit, trigger, state, style, transition, animate, DoCheck } from '@angular/core';

import { SharedService } from '../sharedService';

import { BookingService } from '../service/booking.service';

import { ModelBookingBarbers } from './model/modelBookingBarbers';

import { ModelBookingDates } from '../bookingDates/model/bookingDatesModel';


@Component({
    moduleId: module.id,
    selector: 'bookingBarbers',
    templateUrl: 'bookingBarbers.component.html',
    styleUrls: ['bookingBarbers.component.css']
    //  animations: [
    //     trigger('signal', [
    //         state('void', style({
    //             'transform':'translateX(+110%)'
    //     })),
    //     transition('* => *', animate('.8s 1s'))
    // ])]

})

export class BookingBarbersComponent implements OnInit {

     public serviceSelected: string;

     constructor(private bookingService: BookingService, private _sharedService: SharedService) {}

     data = [null];
     dataUID = [null];

     dates: ModelBookingDates[] = [];

     public barberSelectedToPass: string;

     pageIndex: string;

     ngDoCheck(){
          if(this.pageIndex == "barbers") {

            this._sharedService.setIndex("pppp");

        } else {

        }
     }
     
     ngOnInit(){
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);
        this._sharedService.barberIndexSelected.subscribe(message => this.data = message);
        this._sharedService.barberUIDSelected.subscribe(message => this.dataUID = message);
        this._sharedService.pageIndexSelected.subscribe(message => this.pageIndex = message);
        // this.data = this._sharedService.dataArray;
        this._sharedService.currentMessage1.subscribe(message => this.barberSelectedToPass = message);
     }

       passBarberSelectedData(barberSelected: string) {
         
        var index = this.data.indexOf(barberSelected); 
        console.log(index);

        console.log(this.dataUID[index]);


        this._sharedService.setIndividualUID(this.dataUID[index]);
        this._sharedService.passBarberSelectedData(this.dataUID[index]); //Unecessary duplicate but still being used
        this._sharedService.passData('date');
        this.grabDates(this.dataUID[index]);
        this._sharedService.setBarber(barberSelected);
     }
   

  grabDates(barber: string){
        this.bookingService.grabDatesArray(barber)
        .subscribe( booking => {
            this.dates.push(booking);

            this._sharedService.dateArray.push(booking);
            booking = '';
            
        },
        err => {
            console.error("unable to add bug -", err);
        });
        
    }

    
        
      
    backToServices(){
        this._sharedService.passData("services");
        this._sharedService.setIndex("services");
        //  this._sharedService.deleteBarberArray();
    }



 }