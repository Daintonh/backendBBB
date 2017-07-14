import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import { SharedService } from '../sharedService';

import { BookingService } from '../service/booking.service';

import { ModelBookingDates} from './model/bookingDatesModel';

import {ModelBookingTimes} from '../bookingTimes/model/bookingTimesModel';

@Component({
    moduleId: module.id,
    selector: 'bookingDates',
    templateUrl: 'bookingDates.component.html',
    styleUrls: ['bookingDates.component.css']
    //  animations: [
    //     trigger('signal', [
    //         state('void', style({
    //             'transform':'translateX(+110%)'
    //     })),
    //     transition('* => *', animate('.8s'))
    // ])]

})

export class BookingDatesComponent implements OnInit { 

    constructor(private bookingService: BookingService, private _sharedService: SharedService) {}

    public serviceSelected: string;
    public barberSelectedToPass="j"
    public barberSelectedName = "";

    private bookings: ModelBookingDates[]  = [];

    public dates: ModelBookingDates[]= [];
    public barberPassedIn: string;

    public timesArray: ModelBookingTimes[] = [];

    message: string;

    ngOnInit(){
        this.dates = this._sharedService.dateArray;
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);
        this._sharedService.currentMessage1.subscribe(message => this.barberSelectedToPass = message);
        this._sharedService.barberSelectedMain.subscribe(message => this.barberSelectedName = message);
        // this._sharedService.barberUID.subscribe(message => this.barberSelectedName = message);
        // console.log(this.barberSelectedToPass);
        
        
    }   

     passBarberSelectedData(date: ModelBookingDates) {
        
        this.grabTimes(this.barberSelectedToPass,date.id);
        this.passDateData(String(date.date));
        this._sharedService.passData("time");
     }

    grabTimes(barberSelected: string, dateSelected: string){
        console.log(barberSelected);
        // var milliseconds = (new Date).getTime();
        this.bookingService.grabTimesArray(barberSelected, dateSelected)
        
        .subscribe( booking => {

            this.timesArray.push(booking);

            this._sharedService.timeArray.push(booking);
            booking = "";
            
        },
        err => {
            console.error("unable to add bug -", err);
        });
        
        this._sharedService.passData("time");
    }
   
   passDateData(date: string){
    this._sharedService.setDate(date);
   }


backToBarbers(){
    this._sharedService.passData("barber");

}


}