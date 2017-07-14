import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Staff } from '../model/staff';
// import { Bookings } from '../../bookings/model/bookings/bookings';
// import { Transaction } from '../../transaction/model/transaction';

import { FirebaseConfigService } from '../../../core/service/firebase-config.service';


@Injectable()
export class StaffService { 

// user: Observable<firebase.User>;
    email: string;
    password:string;
    errorMessage: string;

    constructor(private fire: FirebaseConfigService /*, public afAuth: AngularFireAuth*/) { 
        // this.user = afAuth.authState;
     
    }

    private bookingsDbRef = this.fire.database.ref().child('/services');
    public barbersDBRef = this.fire.database.ref().child('/barbers').child('/barbers');
    public staffRef = this.fire.database.ref().child('/staff');
    public auth = this.fire._firebaseAuthRef;
    public staffStorageRef = this.fire.storage.ref();
    


   grabUsersArray():Observable<any> {
         return Observable.create(obs => {
            
                this.staffRef.on('child_added', staff => {
                        const newStaff = staff.val() as Staff;
                        newStaff.id = staff.key;
                            obs.next(newStaff);
                            console.log("juice");
                            
                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }

//    changedListener(): Observable<any> {
//         return Observable.create(obs => {
//             this.staffRef.on('child_changed', upDatedStaff => {
//                 const updatedStaffDetails = upDatedStaff.val() as Staff;
//                 updatedStaffDetails.id = upDatedStaff.key;
//                 obs.next(updatedStaffDetails);
//             },
//             err => {
//                 obs.throw(err);
//             });
//         });
//     }


}





