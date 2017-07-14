import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';

import {SharedService} from '../sharedService';

import { BookingService } from '../../booking/service/booking.service';

@Component({
    moduleId: module.id,
    selector: 'bookingConfirm',
    templateUrl: 'bookingConfirm.component.html',
    styleUrls: ['bookingConfirm.component.css']

})

export class BookingConfirmComponent implements OnInit {

    constructor(private bookingService: BookingService, private _sharedService: SharedService) {}

    public serviceSelected: string;

    public dateSelected: string;
    public timeSelected: string;
    public barberSelected:string;
    public cutSelected: string;

    ngOnInit(){
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);

        this._sharedService.dateSelectedMain.subscribe(message => this.dateSelected = message);
        this._sharedService.timeSelectedMain.subscribe(message => this.timeSelected = message);
        this._sharedService.barberSelectedMain.subscribe(message => this.barberSelected = message);
        this._sharedService.cutSelectedMain.subscribe(message => this.cutSelected = message);
    }

       sendDataToFirebase(){
        
        this._sharedService.passData('signUp');
    }


        
 }