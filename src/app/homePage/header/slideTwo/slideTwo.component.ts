import { Component, OnInit, trigger, state, style, transition, animate, DoCheck, OnDestroy } from '@angular/core';

import { HeaderService } from '../header.service';

import {Observable} from 'rxjs/Rx';

import { SharedSlides } from '../sharedSlides';


import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'slideTwo',
    templateUrl: 'slideTwo.component.html',
    styleUrls: ['slideTwo.component.css'],
    animations: [
  trigger('fadeInOut', [
    transition(':enter', [   // :enter is alias to 'void => *'
      style({opacity:0}),
      animate(300, style({opacity:1})) 
    ])
  ])
]
    // ,
    // animations: [
    //     trigger('signal', [
    //         state('void', style({
    //             'transform':'translateX(-100%)'
    //     })),
    //     transition('* => *', animate(800))
    // ])]

})

export class SlideTwoComponent implements OnInit, OnDestroy {
        signal;
  
        public pageIndex: String;

        private subscription = new Subscription();
        constructor(private bookingService: HeaderService, private _sharedService: SharedSlides) {}

      

    // ngDoCheck(){
    //     if(this.pageIndex == "services") {
           
    //         this._sharedService.setIndex("u22");
            
    //         this.getAddedBugs();
    //     } else {

    //     }
    // }

    ngOnInit() {
       

        // this._sharedService.barberArray.subscribe(message => this.barbersArray = message);
       
        this._sharedService.currentMessage.subscribe(message => this.pageIndex = message);
        // this.surf();
        
    }

    

     surf(){
        //  IntervalObservable.create(5000).take(10).map((x) => x + 1)



        this.subscription = Observable.interval(20 * 60).subscribe(x => {
        this.setNewData();
  });

       
     }

goBackData(){
    this._sharedService.setIndividualUID("slideOne");
}

 setNewData(){
     this._sharedService.setIndividualUID("slideThree");
 }

    // passCutData(cut: string){
        
    //     this._sharedService.setCut(cut);
    //     this._sharedService.setCost(booking.cost);
    //     if (this.pageIndex == "services"){
    //         this._sharedService.setIndex("barbers");

    //     } else {
    //         console.log("first time on barber page");
    //     }
    // }

    
 

    // passCutData(cut: string){
        
    //     this._sharedService.setCut(cut);
    //     this._sharedService.setCost(booking.cost);
    //     if (this.pageIndex == "services"){
    //         this._sharedService.setIndex("barbers");

    //     } else {
    //         console.log("first time on barber page");
    //     }
    // }

   ngOnDestroy() {
        /*
         * magic kicks in here: All subscriptions which were added
         * with "subscription.add" are canceled too!
         */
        this.subscription.unsubscribe();
    }

    
 }