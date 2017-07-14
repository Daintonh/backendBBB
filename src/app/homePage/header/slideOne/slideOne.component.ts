import { Component, OnInit,AfterViewInit, trigger, state, style, transition, animate, DoCheck,keyframes, OnDestroy } from '@angular/core';

import { HeaderService } from '../header.service';

import {Observable} from 'rxjs/Rx';

import { SharedSlides } from '../sharedSlides';


import { Subscription } from 'rxjs/Subscription';

@Component({
    moduleId: module.id,
    selector: 'slideOne',
    templateUrl: 'slideOne.component.html',
    styleUrls: ['slideOne.component.css'],
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
    //             'transform':'translateX(100%)'
    //     })),
    //     transition('* => *', animate(800))
    // ])]

})

export class SlideOneComponent implements OnInit, OnDestroy {
        signal;
  
        private subscription = new Subscription();

        public pageIndex: String;
        constructor(private bookingService: HeaderService, private _sharedService: SharedSlides) {}

      

    // ngDoCheck(){
    //     if(this.pageIndex == "services") {
           
    //         this._sharedService.setIndex("u22");
            
    //         this.getAddedBugs();
    //     } else {

    //     }
    // }

    state: string = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }

    ngOnInit() {

        this.animateMe();
        // this._sharedService.barberArray.subscribe(message => this.barbersArray = message);
       
        this._sharedService.currentMessage.subscribe(message => this.pageIndex = message);
        
    //    this.surf();
        
    }

    

     surf(){
        //  IntervalObservable.create(5000).take(10).map((x) => x + 1)

var observable = Observable.interval(100);

var subscription = observable.subscribe(function(value) {
   console.log(value);
});

//         this.subscription = Observable.interval(20 * 60).subscribe(x => {
//         this.setNewData();
//   }));

       
     }
goBackData(){
    this._sharedService.setIndividualUID("slideThree")
}

 setNewData(){
     this._sharedService.setIndividualUID("slideTwo");
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

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

    
 }