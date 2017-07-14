import { Component, OnInit, trigger, state, style, transition, animate, DoCheck } from '@angular/core';

import { HeaderService } from '../header.service';



import { SharedSlides } from '../sharedSlides';

@Component({
    moduleId: module.id,
    selector: 'slideThree',
    templateUrl: 'slideThree.component.html',
    styleUrls: ['slideThree.component.css'],
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

export class SlideThreeComponent implements OnInit {
        signal;
  
        public pageIndex: String;
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
        
        
    }


goBackData(){
    this._sharedService.setIndividualUID("slideTwo");
}

 setNewData(){
     this._sharedService.setIndividualUID("slideOne");
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

    
 }