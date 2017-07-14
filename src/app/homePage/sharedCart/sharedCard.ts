import {Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Products } from '../products/model/products';

@Injectable()
export class SharedCartService {

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

    private CheckOutSelectedMain = new BehaviorSubject<string>("Cart");
    checkOutSelected = this.CheckOutSelectedMain.asObservable();

    private EmailSelectedSourceMain = new BehaviorSubject<string>('');
    emailSelected = this.EmailSelectedSourceMain.asObservable();

    private CartBeingUsed= new BehaviorSubject<string>('false');
    cartUsed = this.CartBeingUsed.asObservable();

    private TotalCostCartMain = new BehaviorSubject<number>(0);
    totalCostCart = this.TotalCostCartMain.asObservable();
    
    private ProductsInCart = new BehaviorSubject<number>(0);
    productsCartTotal = this.ProductsInCart.asObservable();

     private ProductsInCartArray = new BehaviorSubject<Array<number>>([]);
    productsCartTotalArray = this.ProductsInCartArray.asObservable();


    private ProductCartSelected = new BehaviorSubject<Array<Products>>([]);
    ProductCart = this.ProductCartSelected.asObservable();


    private barberUIDIndictor = new BehaviorSubject<Array<string>>([""]);
    barberUIDSelected = this.barberUIDIndictor.asObservable();

    private PageIndexIndictor =new BehaviorSubject<string>("");
    pageIndexSelected = this.PageIndexIndictor.asObservable();

    private individualBarberUIDSelected = new BehaviorSubject<string>("");
    barberUID = this.individualBarberUIDSelected.asObservable();
    
  

    dataArray: string[] = [];

    dateArray: string[] = [];

    timeArray: string[] = [];

    barberSelected: string

    setIndividualUID(UID:string){
        this.individualBarberUIDSelected.next(UID);
    }

    addToProductArray(prdouctsArray: Products[]) {
        var self = this;

    this.ProductCartSelected.next(prdouctsArray);
    this.setLengthOfProductsArray(prdouctsArray);
    var arrayTotal: number[]=[];

     var result = prdouctsArray.map(function(a) {
          arrayTotal.push(a.cost);

          
        // var a = [1,2,3];
       
        var total=0;
        for(var i in arrayTotal) { 
            total += arrayTotal[i]; 
            self.TotalCostCartMain.next(total);
        }

        });
  }


  incrementQuantityCostInCart(newCost: number){
      this.TotalCostCartMain.next(newCost);
    //   this.TotalCostCartMain += costIncrease;

  }

  setLengthOfProductsArray(prdouctsArray: Products[]){
        this.ProductsInCart.next(prdouctsArray.length) 
  }

  setBarberUIDS(barberUIDS: string[]){
    this.barberUIDIndictor.next(barberUIDS);
  }

    deleteArray(){
      this.ProductCartSelected.next([null]);
    }

    insertData(data: string){
        this.dataArray.unshift(data);
        // this.setArray(this.dataArray);
    }

    insertDateData(data: string) {
        this.dateArray.unshift(data);
    }

    insertTimeData(data: string){
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

    toggleCheckout(cut: string) {
        if (cut == "Checkout"){
            this.CheckOutSelectedMain.next("Cart");
        } else if(cut == "Cart"){
            this.CheckOutSelectedMain.next("Checkout");
        } else {
            console.log("Neither Checkout or Cart");
        }
        
    }

    setEmail(email: string) {
        this.EmailSelectedSourceMain.next(email);
    }

    setProductCartUsed(cost: string){
        this.CartBeingUsed.next(cost);
    }

    // getCartTotalCost(productCart: Products[]){
    //     var result = productCart.map(function(a) {
    //         return a.cost * a.quantityInCart
    //     });
    //     // this.TotalCostCartMain.next(timeKey);
    // }

    // setDateKey(dateKey: number){
    //     this.DateKeySelectedSourceMain.next(dateKey);
    // }


// Here is bottom cut off


    passData(message: string) {
        this.selectedBookingSource.next(message);
    }

   

    passBarberSelectedData(barber: string){
        this.BarberSelectedSource.next(barber);
    }

}