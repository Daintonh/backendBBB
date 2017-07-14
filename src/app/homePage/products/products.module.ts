// Modules
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import {HttpModule} from '@angular/http';
// import { Headers } from '@angular/http';
// import { AngularFireModule } from 'angularfire2';


//Components
// import { BookingTimesComponent } from './bookingTimes/bookingTimes.component';
// import { BookingServicesComponent } from './bookingServices/bookingServices.component';
// import { BookingDatesComponent } from './bookingDates/bookingDates.component';
// import { BookingConfirmComponent } from './bookingConfirm/bookingConfirm.component';
// import { BookingBarbersComponent } from './bookingBarbers/bookingBarbers.component';
// import { BookingSignUpComponent } from './bookingSignUp/bookingSignUp.component';
// import { StripeBookingPage } from './stripeBookingPage/stripeBookingPage.component';


import { FIREBASE_CONFIG } from '../../core/constants/constants';

// Services
import { ProductsService } from './service/products.service';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';
// import {SharedService} from './sharedService';

import {CapitalizePipe} from "../../shared/pipes/capitalize.pipe";

@NgModule ({ 

    imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [  ],
    exports: [  ],
    providers: [ FirebaseConfigService, ProductsService ]


})

export class ProductsModule { }