import { Component, OnInit, NgZone, Renderer } from '@angular/core';

// import { BookingService } from '../service/booking.service';

import { SharedService } from '../sharedService';

@Component({
    selector: 'stripePage',
    moduleId: module.id,
    templateUrl: 'stripeBookingPage.component.html',
    styleUrls: ['stripeBookingPage.component.css']
})

export class StripeBookingPage implements OnInit {

    serviceSelected: string;

    constructor(/*private _zone: NgZone,*/ private _sharedService: SharedService, private renderer: Renderer) {}

    ngOnInit(){
        this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);
        // this.amount= 55;
    }



//   stripeResponseHandler(status, response):void {
//     if (response.error) {
//         this.error = 'The card provided is not valid:' + response.error.message;
//     } else {
//         // response contains id and card, which contains additional card details
//         var token = response.id;
//         // reset the error
//         const data = {
//             whatever: this.form.value.whatever,
//             stripeToken: token
//         };
    
//     }
// };




























//   createOrder(token, cart) {
// this.ordersService.createOrder(token, this.cart).subscribe(
//   res => {
//     console.log(res);
//   }, err => {
//     console.log(err);
//   });
// }
//     cardNumber: string;
//     expiryMonth: string;
//     expiryYear: string;
//     cvc: string;
//     message: string;
//     amount: number
   

//   getToken() {
//     this.message = 'Loading...';

//     (<any>window).Stripe.card.createToken({
//       number: this.cardNumber,
//       exp_month: this.expiryMonth,
//       exp_year: this.expiryYear,
//       cvc: this.cvc,
//     //   amount: this.amount
//     }, (status: number, response: any) => {
//       if (status === 200) {
//         this.message = `Success! Card token ${response.card.id}.`;
        
//       } else {
//         this.message = response.error.message;
//       }
//     });
//   }

  

//   getToken() {
//     this.message = 'Loading...';

//     (<any>window).Stripe.card.createToken({
//       number: this.cardNumber,
//       exp_month: this.expiryMonth,
//       exp_year: this.expiryYear,
//       cvc: this.cvc
//     }, (status: number, response: any) => {

//       // Wrapping inside the Angular zone
//       this._zone.run(() => {
//         if (status === 200) {
//           this.message = `Success! Card token ${response.card.id}.`;
//         } else {
//           this.message = response.error.message;
//         }
//       });
//     });
//   }
// }

}