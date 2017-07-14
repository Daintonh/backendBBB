import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { Portfolio } from '../model/portfolio';
// import { Bookings } from '../../bookings/model/bookings/bookings';

import { FirebaseConfigService } from '../../../core/service/firebase-config.service';


@Injectable()
export class PortfolioService { 

public portfolioRef = this.fire.database.ref().child("portfolio");

public stockStorageRef = this.fire.storage.ref();

    email: string;
    password:string;
    errorMessage: string;

    constructor(private fire: FirebaseConfigService) { }


grabStockArray():Observable<any> {
         return Observable.create(obs => {
            
                this.portfolioRef.on('child_added', transaction => {
                        const newTransaction = transaction.val() as Portfolio;
                        newTransaction.id = transaction.key;
                            obs.next(newTransaction);
                            console.log("juice");
                            
                },
                err => {
                    obs.throw(err);
                }
            );
        });
    }


   changedListener(): Observable<any> {
        return Observable.create(obs => {
            this.portfolioRef.on('child_changed', upDatedCustomer => {
                const updatedUserDetails = upDatedCustomer.val() as Portfolio;
                updatedUserDetails.id = upDatedCustomer.key;
                obs.next(updatedUserDetails);
            },
            err => {
                obs.throw(err);
            });
        });
    }
}