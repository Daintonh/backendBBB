import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseConfigService } from '../../../core/service/firebase-config.service';

// import { ModelBookingService } from '../../booking/bookingServices/model/bookingService';
// import { Staff } from '../../booking/bookingServices/model/bookingService';

// import { ModelBookingDates} from '../../booking/bookingDates/model/bookingDatesModel';
// import { ModelBookingTimes} from '../../booking/bookingTimes/model/bookingTimesModel';
import { Products } from '../model/products';


@Injectable()
export class ProductsService { 

// user: Observable<firebase.User>;
    email: string;
    password:string;
    errorMessage: string;

    constructor(private fire: FirebaseConfigService /*, public afAuth: AngularFireAuth*/) { 
        // this.user = afAuth.authState;
     
    }

    private bookingsDbRef = this.fire.database.ref().child('/services');
    private stockDbRef = this.fire.database.ref().child('/stock');
    public barbersDBRef = this.fire.database.ref().child('/staff')
    public customersRef = this.fire.database.ref().child('/users');
    public auth = this.fire._firebaseAuthRef;


  
   
    getAddedBugs(): Observable<any> {
        return Observable.create(obs => {
            
                this.stockDbRef.on('child_added', booking => {
                        const newBooking = booking.val() as Products;
                        newBooking.id = booking.key;
                            obs.next(newBooking);
                            console.log(newBooking);
                            
                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }

   
}