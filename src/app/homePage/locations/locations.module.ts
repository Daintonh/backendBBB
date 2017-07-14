import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { AngularFireModule } from 'angularfire2';

//Components
// import { CustomerEditComponent } from '../customers/customerEdit/customerEdit.component';
// import { DeleteUserConfirm } from '../customers/deleteUserConfirm/deleteUserConfirm.component';
// import { StockComponent } from '../stock/stock.component';



// import { HomePageComponent } from '../../homePage/homePage.component';
import { FirebaseConfigService } from '../../core/service/firebase-config.service';

// Services
import { StaffService } from './service/staff.service';



@NgModule ({ 

    imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [  ],
    exports: [  ],
    providers: [ StaffService, FirebaseConfigService ]


})

export class LocationsModule { }