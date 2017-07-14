import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

// import { AngularFireAuth } from 'angularfire2/auth';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';



@Injectable()
export class HeaderService { 

// user: Observable<firebase.User>;
    email: string;
    password:string;
    errorMessage: string;

    constructor(private fire: FirebaseConfigService) { }

    private bookingsDbRef = this.fire.database.ref().child('/services');
    public barbersDBRef = this.fire.database.ref().child('/staff')
    public customersRef = this.fire.database.ref().child('/users');
    public auth = this.fire._firebaseAuthRef;



}