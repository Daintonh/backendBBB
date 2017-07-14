import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class SharedSlides {

    message: string;
    barberTapped: string;

    private selectedBookingSource = new BehaviorSubject<string>('slideOne');
    currentMessage = this.selectedBookingSource.asObservable();


    private CostSelectedSourceMain = new BehaviorSubject<number>(null);
    cutCostSelected = this.CostSelectedSourceMain.asObservable();

    private barberUIDIndictor = new BehaviorSubject<Array<string>>([""]);
    barberUIDSelected = this.barberUIDIndictor.asObservable();


    dataArray: string[] = [];

    barberSelected: string

    setIndividualUID(UID:string){
        this.selectedBookingSource.next(UID);
    }

    addToArray(barbersArray: string[]) {

    this.barberUIDIndictor.next(barbersArray);
  }
    insertData(data: string){
        this.dataArray.unshift(data);
        // this.setArray(this.dataArray);
    }


    constructor() {}

   
}