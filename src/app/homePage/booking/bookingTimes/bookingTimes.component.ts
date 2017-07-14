import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import {SharedService} from '../sharedService';

import { ModelBookingTimes } from './model/bookingTimesModel';

@Component({
    moduleId: module.id,
    selector: 'bookingTimes',
    templateUrl: 'bookingTimes.component.html',
    styleUrls: ['bookingTimes.component.css'],
    animations: [
        trigger('signal', [
            state('void', style({
                'transform':'translateX(+110%)'
        })),
        transition('* => *', animate('.8s'))
    ])]

})

export class BookingTimesComponent implements OnInit {

    timesArray: ModelBookingTimes[] = [];
    public serviceSelected: string;

    public date: string;

    constructor(private _sharedService: SharedService) {}

    ngOnInit(){
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);
        this.timesArray = this._sharedService.timeArray;
        this._sharedService.dateSelectedMain.subscribe(message => this.date = message);
        console.log(this.timesArray);


    }

    passTimeData(booking: ModelBookingTimes){
        this._sharedService.setTime(booking.time);
        this._sharedService.passData("confirm");
        this._sharedService.setTimeKey(booking.id);

    }

    backToDates(){
    this._sharedService.passData("date");

}

 }