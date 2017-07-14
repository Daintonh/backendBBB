import { Component, OnInit, trigger, state, style, transition, animate, DoCheck } from '@angular/core';

import { BookingService } from '../service/booking.service';

import { ModelBookingService } from './model/bookingService';

import { SharedService } from '../sharedService';

@Component({
    moduleId: module.id,
    selector: 'bookingServices',
    templateUrl: 'bookingServices.component.html',
    styleUrls: ['bookingServices.component.css']
    // animations: [
    //     trigger('signal', [
    //         state('void', style({
    //             'transform':'translateX(-100%)'
    //     })),
    //     transition('* => *', animate(800))
    // ])]

})

export class BookingServicesComponent implements OnInit {
        
        signal;

        constructor(private bookingService: BookingService, private _sharedService: SharedService) {}

        private bookings: ModelBookingService[]  = [];
        public barberUIDS: string[]=[];

        public barbersArray: string[]=[];

        public serviceSelected: string;

        data: string[] = [];
       
        pageIndex: string;

    ngDoCheck(){
        if(this.pageIndex == "services") {
           
            this._sharedService.setIndex("u22");
            
            this.getAddedBugs();
        } else {

        }
    }

    ngOnInit() {

        this.getAddedBugs();
        // this._sharedService.barberArray.subscribe(message => this.barbersArray = message);
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);
        this._sharedService.pageIndexSelected.subscribe(message => this.pageIndex = message);
        
        
    }

    getAddedBugs() {
        this.bookings = [];
         
        this.bookingService.getAddedBugs()
        .subscribe(booking => {

            this.bookings.push(booking);

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }

    grabBarbersNames(staff: string){
        var self = this
        this.bookingService.barbersDBRef.child(staff).once('value').then(function(snapshot) {
        var num = snapshot.val().name as string;
        self.barbersArray.push(num);
        self._sharedService.insertData(num);
        console.log(num);
    });
        // console.log(staff)
        // this.bookingService.getBarbersNames(staff)
        //   .subscribe(booking => {
                
        //         // this.barbersArray.push(booking.name);
        //         // console.log(booking.name);

        //         // this._sharedService.insertData(booking.name);
                
        //     },
                 
        // err => {
        //     console.error("unable to add bug -", err);
        // });
        // this._sharedService.addToArray(this.barbersArray);
    }

    grabBarbersArray(booking: ModelBookingService){
        this.barbersArray = [];
        this.barberUIDS = [];

        this.bookingService.grabBarbersArray(booking)
            .subscribe(booking => {
                console.log(booking);
                this.barberUIDS.push(booking);
                console.log(this.barberUIDS);
                // this.bookingService.getBarbersNames
                this.grabBarbersNames(booking);
                
                // this.barbersArray.push(booking);
                // this._sharedService.insertData(booking);
                booking = '';

                 },
                 
        err => {
            console.error("unable to add bug -", err);
        });
        
        // this._sharedService.deleteArray();
        this._sharedService.passData("barber");
        this.passCutData(booking.name, booking);
        console.log(this.barbersArray);
        this._sharedService.addToArray(this.barbersArray);
        this._sharedService.setBarberUIDS(this.barberUIDS);
        
    }

    passCutData(cut: string, booking: ModelBookingService){
        
        this._sharedService.setCut(cut);
        this._sharedService.setCost(booking.cost);
        if (this.pageIndex == "services"){
            this._sharedService.setIndex("barbers");

        } else {
            console.log("first time on barber page");
        }
    }

    
 }