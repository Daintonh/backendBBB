import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ContactFormService } from './service/contactForm.service';
import 'rxjs/add/operator/toPromise';

import {ContactFormMessage} from './model/contactForm';

@Component({
    moduleId: module.id,
    selector: 'contactForm',
    templateUrl: 'contactForm.component.html',
    styleUrls: ['contactForm.component.css']
})

export class ContactFormComponent implements OnInit {

  public contacFormForm: FormGroup;

  constructor(private http: Http, private formB: FormBuilder, private contactFormSVC: ContactFormService) { }

  ngOnInit(){
      this.contacFormForm = this.formB.group({
                  username: [],
                  userEmail: [],
                  referencePoint: ["friends"],
                  message: [],

      });
  }


  // https://us-central1-frontendbarber.cloudfunctions.net/httpEmail

//  constructor(private http: Http) { }

  sendEmail() {

    let url = 'https://us-central1-frontendbarber.cloudfunctions.net/httpEmail';
    let params: URLSearchParams = new URLSearchParams();
    let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    params.set('to', 'foodplusoffice@gmail.com');
    params.set('from', 'jackquinn.9515@gmail.com');
    params.set('subject', 'test-email');
    params.set('content', 'Hello World');

    return this.http.post(url, params, headers)
                    .toPromise()
                    .then( res => {
                      console.log(res)
                    })
                    .catch(err => {
                      console.log(err)
                    })

  }

}