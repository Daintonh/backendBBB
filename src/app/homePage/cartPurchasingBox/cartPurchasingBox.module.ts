// Modules
import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { BrowserModule } from '@angular/platform-browser';
// import { ReactiveFormsModule } from '@angular/forms';
// import {HttpModule} from '@angular/http';
// import { Headers } from '@angular/http';
// import { AngularFireModule } from 'angularfire2';


//Components
import { CheckOutSectionComponent } from './checkoutSection/checkoutSection.component'

import { CartPurchasingBoxComponent } from './cartPurchasingBox.component';
import { FIREBASE_CONFIG } from '../../core/constants/constants';

// Services
// import { BookingService } from './service/booking.service';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';
// import {SharedService} from './sharedService';

import {CapitalizePipe} from "../../shared/pipes/capitalize.pipe";



// import {SlideOneComponent} from "./slideOne/slideOne.component";
// import {SlideTwoComponent} from "./slideTwo/slideTwo.component";
// import { SlideThreeComponent } from "./slideThree/slideThree.component";

@NgModule ({ 

    imports: [CoreModule, CommonModule],
    declarations: [CheckOutSectionComponent],
    exports: [CheckOutSectionComponent ],
    providers: [ FirebaseConfigService ]


})

export class CartPurchasingBoxModule { }