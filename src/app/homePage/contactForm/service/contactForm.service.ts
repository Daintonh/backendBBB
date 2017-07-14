import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ContactFormMessage } from '../model/contactForm';
// import { Bookings } from '../../bookings/model/bookings/bookings';

import { FirebaseConfigService } from '../../../core/service/firebase-config.service';


@Injectable()
export class ContactFormService { 

public messagesRef = this.fire.database.ref().child("messages");

public stockStorageRef = this.fire.storage.ref();

    email: string;
    password:string;
    errorMessage: string;

    constructor(private fire: FirebaseConfigService) { }


      addUser(message: ContactFormMessage) {

        var date = new Date().getMilliseconds();

        // const sendMessageRef = this.messagesRef.push();
        this.messagesRef.child(String(message.id)).update({

            username: message.userName,
            emailAddress: message.emailAddress,
            message: message.message,
            referencePoint: message.referencePoint,
            newsletter: message.newsletter
      
        })
        
        .catch(err => console.error("Unable to add bug to Firebase - ", err));
    }

}