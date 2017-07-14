import { Component, OnInit,AfterContentInit, Input, ChangeDetectorRef, NgZone, Renderer, Injectable} from '@angular/core';

import { BookingService } from '../service/booking.service';

import { SharedService } from '../sharedService';

import { BookingSignUpModel } from './model/bookingSignUpModel';

import { Http, Headers } from '@angular/http';
import * as firebase from 'firebase';

@Component({
    moduleId: module.id,
    selector: 'bookingSignUp',
    templateUrl: 'bookingSignUp.component.html',
    styleUrls: ['bookingSignUp.component.css']
    // animations: [
    //     trigger('signal', [
    //         state('void', style({
    //             'transform':'translateX(-100%)'
    //     })),
    //     transition('* => *', animate(800))
    // ])]

})
@Injectable()
export class BookingSignUpComponent implements OnInit, AfterContentInit {

    constructor(private bookingService: BookingService, private _sharedService: SharedService, private ref: ChangeDetectorRef, private renderer: Renderer, private http: Http) {}



    public recaptchaVerifier:firebase.auth.RecaptchaVerifier;

    UserCredentialDetails: BookingSignUpModel;

    serviceSelected: string;

    errorMessage1: string;
    emailSlected: string;
    costSelected: number;
    
    success = false;

    globalListener: any;

    token_triggered = false;
    dateSelected:string;
    timeSelected: string;
    barberSelected: string;
    cutSelected: string;
    timeKeySelected: number;

    ngOnInit(){
// this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');


    //  new this.bookingService.recaptchaVerifier

//            window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
//   'size': 'invisible',
//   'callback': function(response) {
//     // reCAPTCHA solved, allow signInWithPhoneNumber.
//     onSignInSubmit();
//   }
// });

            this._sharedService.currentMessage.subscribe(message => this.serviceSelected = message);
            this.success = false;
            this._sharedService.emailSelected.subscribe(message => this.emailSlected = message);
            this._sharedService.cutCostSelected.subscribe(message => this.costSelected = message);

            this._sharedService.dateSelectedMain.subscribe(message => this.dateSelected = message);
            this._sharedService.timeSelectedMain.subscribe(message => this.timeSelected = message);
            this._sharedService.barberSelectedMain.subscribe(message => this.barberSelected = message);
            this._sharedService.cutSelectedMain.subscribe(message => this.cutSelected = message);
            this._sharedService.timeKeySelected.subscribe(message => this.timeKeySelected = message);
    }

  ngAfterContentInit(){
this.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
  'size': 'invisible',
  'callback': function(response) {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    // onSignInSubmit();
    this.sign()
  }
});
  }


sign(phoneNumber?: string){

  
// var phoneNumber = getPhoneNumberFromUserInput();
// var appVerifier = window.recaptchaVerifier;
// this.recaptchaVerifier
// var confirmationResult: 
  const appVerifier = this.recaptchaVerifier;
    const phoneNumberString = "+" + phoneNumber;
firebase.auth().signInWithPhoneNumber(phoneNumberString, appVerifier)
    .then(function (confirmationResult) {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      // window.confirmationResult = confirmationResult;
      console.log(confirmationResult);
    }).catch(function (error) {
      // Error; SMS not sent
      // ...
      console.log("909080099");
      console.log(error);
    });


}


  openCheckout() {
      var self = this;
    var handler = (<any>window).StripeCheckout.configure({
        
      key: 'pk_test_2sCFrtL7aruzl68erwU0r9E8',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use

       
      var data = 'stripetoken=' + token.id + '&amount='+ String(self.costSelected * 100);
      var headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded');
      self.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
        console.log("jnnjnjnj");
        if (res.json().success){
            console.log('transaction Successfull!!');
             self._sharedService.passData("stripe");
        } else {
          console.log('ohohohohoh');
        }
        
      });
    



        self.token_triggered = true;
        // self._sharedService.passData("stripe");

        var numConverted = self.timeKeySelected.toLocaleString();
        var numUsed = '' + self.timeKeySelected

        self.bookingService.makeBooking(self.barberSelected,self.dateSelected,numUsed);

        // alert(token.id);
        //     this._httpService.enrollCourse(data)
        //     .subscribe(
        //         data => this.handleSuccess(data, this.form),
        //         error => this.handleError(error)
        // )
        
      },

        closed: function() {
          if (!self.token_triggered) {
            alert("Order Cancelled");
            












            // Create a value and set order cancelled value here or opposite if order was confirmed





















            
          } else {
            //   this.sharedService.passData("stripe");
            
          }}
          
    });
    // var self = this;
    handler.open({
        name: 'Bedford Stuy',
        description: 'Temple Bar',
        amount: this.costSelected * 100,
        email: this.emailSlected,
        currency: 'eur'
    });

    

    this.globalListener = this.renderer.listenGlobal('window', 'popstate', () => {
      handler.close();
      

    });
    
  }

  // pay() {
  //   this.stripe.setPublishableKey('pk_test');
  //   this.stripe.createCardToken(this.cardinfo).then((token) => {
  //     var data = 'stripetoken=' + token + '&amount=50';
  //     var headers = new Headers();
  //     headers.append('Conent-Type', 'application/x-www-form-urlencoded');
  //     this.http.post('http://localhost:3333/processpay', data, { headers: headers }).subscribe((res) => {
  //       if (res.json().success)
  //       alert('transaction Successfull!!')  
  //     })
  //   })
  // }

    signUpButton(email: string, password: string){

        var self = this;
        this.bookingService.auth.createUserWithEmailAndPassword(email, password)
        
        .then(function(firebaseUser) {
       // Success 
            self._sharedService.setEmail(email);
            alert("successfully signed up ");
            self._sharedService.passData("stripe");
            self.bookingService.auth.signInWithEmailAndPassword(email, password);
            
            self.writeUserData(Math.random().toString(36).slice(2),email);
            
            self.openCheckout();
            
            
   })


           .catch(function(error) {
       // Error Handling
            var errorMessage1 = error.message;
            alert(errorMessage1);
            
            
  });
  
       
     
    }

    writeUserData(userID, email) {

  this.bookingService.customersRef.child(userID).set({

    email: email

  });

  
}



    

    onSubmit(formData){
        console.log(formData.value.email);
    }

    loginButton(email: string, password: string){

        var self = this;

        this.bookingService.auth.signInWithEmailAndPassword(email, password)

       

         .then(function(firebaseUser) {
       // Success 
            self._sharedService.setEmail(email);
            alert("successfully signed in");
            self.openCheckout();
            
            
            
   })
        .catch(function(error) {
       // Error Handling
            var errorMessage1 = error.message;
            alert(errorMessage1);
  });
//         .catch(function(error) {
//   // Handle Errors here.
//    if (!error){
       
//            this.sharedService.passData("hhhh");
            
//         } else {
//             var errorMessage1 = error.message;
//             alert(errorMessage1);
//         }

//         return;
     
// });



    }

    private details = new BookingSignUpModel(null, null, null);

     ngOnDestroy() {
        this.globalListener();
        
  }
}