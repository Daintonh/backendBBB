import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

// import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseConfigService } from '../../../core/service/firebase-config.service';

import { ModelBookingService } from '../../booking/bookingServices/model/bookingService';
import { Staff } from '../../booking/bookingServices/model/bookingService';

import { ModelBookingDates} from '../../booking/bookingDates/model/bookingDatesModel';
import { ModelBookingTimes} from '../../booking/bookingTimes/model/bookingTimesModel';


@Injectable()
export class BookingService { 

// user: Observable<firebase.User>;
    email: string;
    password:string;
    errorMessage: string;

    public recaptchaVerifier: firebase.auth.RecaptchaVerifier; 
    public bookingsDbRef = this.fire.database.ref().child('/services');
    public barbersDBRef = this.fire.database.ref().child('/staff')
    public customersRef = this.fire.database.ref().child('/users');
    public auth = this.fire._firebaseAuthRef;
    constructor(private fire: FirebaseConfigService /*, public afAuth: AngularFireAuth*/) { 
        // this.user = afAuth.authState;
     
    }

   



   

   makeBooking(barber: string, date: string, time: string /*, bookedBy: string*/){
       
    
    // this.customersRef.child(bookedBy)

    
    // NEED TO USE ABOVE REF TO GRAB USERS NAME TO PASS IT INTO BOOKEDBY KEY IN DATABASE
       

        var timeNodeData = {
            booked: "booked",
            bookedBy: this.auth.currentUser
  };

  this.barbersDBRef.child(barber).child("dates").child(date).child("times").child(String(time)).update(timeNodeData);

   }
 
//     getSignUpDetails(email: string, password: string){
//            this.auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//             var errorCode = error;
//             var errorMessage1 = error.message;
//              console.log(errorMessage1);
             
//   // ...
//             });
//     }

//     getLoginDetails(email: string, password: string){
//         this.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
//   // Handle Errors here.
//         var errorCode = error;
//           var errorMessage1 = error.message;
//          console.log(errorMessage1);
//         //  this.errorMessage = errorMessage1;
//   // ...
// });
//     }
   
    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            
                this.bookingsDbRef.on('child_added', booking => {
                        const newBooking = booking.val() as ModelBookingService;
                        newBooking.id = booking.key;
                            obs.next(newBooking);
                            
                },
                err => {
                    // obs.console.log(err);
                }
            );
        });
    }

    getBarbersNames(staff?: string){

        return Observable.create(obs => {
            
                this.barbersDBRef.on('child_added', booking => {
                        const newBooking = booking.val() as Staff;
                        console.log(newBooking);
                        // newBooking.id = booking.key;
                            obs.next(newBooking);
                            
                },
                err => {
                    // obs.console.log(err);
                }
            );
        });

    }

    grabBarbersArray(bookingSelected: ModelBookingService):Observable<any> {
        const currentBookingRef = this.bookingsDbRef.child(bookingSelected.id).child('barbers');

         return Observable.create(obs => {
             currentBookingRef.on('child_added', booking => {
                        obs.next(booking.val());
                        
                },
                err => {
                    console.log(err);
                }
            );
        });
    }

    grabDatesArray(barberSelected: string):Observable<any> {
        const currentBookingRef = this.barbersDBRef.child(barberSelected).child('dates');

        return Observable.create(obs => {

            currentBookingRef.on('child_added', booking => {
                const newBooking = booking.val() as ModelBookingDates;
                newBooking.id = booking.key;
                var currentEpochDate = (new Date).getTime();
                if (newBooking.date > currentEpochDate && newBooking.booked == "notBooked") {
                    obs.next(newBooking);
                    console.log(newBooking);
                } else {
                    console.log("date gone");
                }
                
                
            },
                err => {
                    // obs.console.log(err);
                }
            
            );
        });
    }

    grabTimesArray(barberSelected: string, dateSelected: string):Observable<any> {
        const currentBookingRef = this.barbersDBRef.child(barberSelected).child('dates').child(dateSelected).child('times');

        return Observable.create(obs => {

            currentBookingRef.on('child_added', booking => {
                const newBooking = booking.val() as ModelBookingTimes;
                newBooking.id = Number(booking.key);
                
                if (newBooking.booked == "notBooked"){
                    obs.next(newBooking);
                    console.log(newBooking);
                } else {
                    
                }
                
            },
                err => {
                    // obs.console.log(err);
                }
                
            );
        });

    }

}