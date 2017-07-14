import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { ModelBookingDates } from '../booking/bookingDates/model/bookingDatesModel';
import { ModelBookingTimes } from '../booking/bookingTimes/model/bookingTimesModel';

@Injectable()
export class SharedService {

    message: string;
    barberTapped: string;

    private selectedBookingSource = new BehaviorSubject<string>('services');
    currentMessage = this.selectedBookingSource.asObservable();

    private BarberSelectedSource = new BehaviorSubject<string>('');
    currentMessage1 = this.BarberSelectedSource.asObservable();

    private DateSelectedSourceMain = new BehaviorSubject<string>('');
    dateSelectedMain= this.DateSelectedSourceMain.asObservable();

    private TimeSelectedSourceMain  = new BehaviorSubject<string>('');
    timeSelectedMain = this.TimeSelectedSourceMain.asObservable();

     private BarberSelectedSourceMain = new BehaviorSubject<string>('');
    barberSelectedMain = this.BarberSelectedSourceMain.asObservable();

    private CutSelectedSourceMain = new BehaviorSubject<string>('');
    cutSelectedMain = this.CutSelectedSourceMain.asObservable();

    private EmailSelectedSourceMain = new BehaviorSubject<string>('');
    emailSelected = this.EmailSelectedSourceMain.asObservable();

    private CostSelectedSourceMain = new BehaviorSubject<number>(null);
    cutCostSelected = this.CostSelectedSourceMain.asObservable();

    private TimeKeySelectedSourceMain = new BehaviorSubject<number>(null);
    timeKeySelected = this.TimeKeySelectedSourceMain.asObservable();
    
    private DateKeySelectedSourceMain = new BehaviorSubject<number>(null);
    dateKeySelected = this.DateKeySelectedSourceMain.asObservable();


    private barberIndictor = new BehaviorSubject<Array<string>>([""]);
    barberIndexSelected = this.barberIndictor.asObservable();


    private barberUIDIndictor = new BehaviorSubject<Array<string>>([""]);
    barberUIDSelected = this.barberUIDIndictor.asObservable();

    private PageIndexIndictor =new BehaviorSubject<string>("");
    pageIndexSelected = this.PageIndexIndictor.asObservable();

    private individualBarberUIDSelected = new BehaviorSubject<string>("");
    barberUID = this.individualBarberUIDSelected.asObservable();
    
  

    dataArray: string[] = [];

    dateArray: ModelBookingDates[] = [];

    timeArray: ModelBookingTimes[] = [];

    barberSelected: string

    setIndividualUID(UID:string){
        this.individualBarberUIDSelected.next(UID);
    }


    addToArray(barbersArray: string[]) {

    this.barberIndictor.next(barbersArray);
  }

  setBarberUIDS(barberUIDS: string[]){
    this.barberUIDIndictor.next(barberUIDS);
  }

    deleteArray(){
      this.barberIndictor.next([null]);
    }

    insertData(data: string){
        this.dataArray.unshift(data);
        // this.setArray(this.dataArray);
    }

    insertDateData(data: ModelBookingDates) {
        this.dateArray.unshift(data);
    }

    insertTimeData(data: ModelBookingTimes){
        this.timeArray.unshift(data);

    }

    setIndex(index: string){
        this.PageIndexIndictor.next(index);
    }


    constructor() {}

    // Setting Selected Information down to bottom cut off

    setDate(date: string) {
        this.DateSelectedSourceMain.next(date);
    }

    setTime(time: string) {
        this.TimeSelectedSourceMain.next(time);
    }

    setBarber(barber: string) {
        this.BarberSelectedSourceMain.next(barber);
    }

    setCut(cut: string) {
        this.CutSelectedSourceMain.next(cut);
    }

    setEmail(email: string) {
        this.EmailSelectedSourceMain.next(email);
    }

    setCost(cost: number){
        this.CostSelectedSourceMain.next(cost);
    }

    setTimeKey(timeKey: number){
        this.TimeKeySelectedSourceMain.next(timeKey);
    }

    setDateKey(dateKey: number){
        this.DateKeySelectedSourceMain.next(dateKey);
    }


// Here is bottom cut off


    passData(message: string) {
        this.selectedBookingSource.next(message);
    }

   

    passBarberSelectedData(barber: string){
        this.BarberSelectedSource.next(barber);
    }

}