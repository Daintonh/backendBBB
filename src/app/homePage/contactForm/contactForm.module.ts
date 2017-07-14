import { NgModule } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { FirebaseConfigService } from '../../core/service/firebase-config.service';

// Services
import { ContactFormService } from './service/contactForm.service';



@NgModule ({ 

    imports: [CoreModule, CommonModule, FormsModule, ReactiveFormsModule],
    declarations: [  ],
    exports: [  CommonModule,
    FormsModule,
    ReactiveFormsModule ],
    providers: [ ContactFormService, FirebaseConfigService ]


})

export class ContactFormModule { }