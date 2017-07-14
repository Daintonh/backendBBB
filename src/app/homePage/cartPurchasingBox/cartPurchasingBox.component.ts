import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio/model/portfolio';
import { PortfolioService } from '../portfolio/service/portfolio.service';
import { SharedCartService } from '../sharedCart/sharedCard';
import { Products } from '../products/model/products';
import { DateSet } from './model/dateSet';

@Component({
    moduleId: module.id,
    selector: 'cartPurchasingBox',
    templateUrl: 'cartPurchasingBox.component.html',
    styleUrls: ['cartPurchasingBox.component.css']
})

export class CartPurchasingBoxComponent implements OnInit { 

     public portfolioArray: Portfolio[]  = [];

       public imageSrc: string;

       public stocksSelected: Products[] = [];

       public checkOutOrCart: string;

       public dateSetArray: DateSet[] = [];

       public cartTotalPrice: number;

       public imageArray: String[] = [];

       public cartBeingUsed: string;

        selectedFiles: FileList;
        // currentUpload: Upload;

        public datesArray: Date[]=[];

    constructor(private portfolioService: PortfolioService, private sharedCartSvc: SharedCartService) { }

    ngOnInit(){
        this.sharedCartSvc.ProductCart.subscribe(message => this.stocksSelected = message);
        this.sharedCartSvc.cartUsed.subscribe(ddd => this.cartBeingUsed = ddd);
        this.sharedCartSvc.totalCostCart.subscribe(dddd => this.cartTotalPrice = dddd);
        this.sharedCartSvc.checkOutSelected.subscribe(eeee => this.checkOutOrCart = eeee);


        // this.cartTotalPrice = 0;
        // var date = new Date();
    //     var datesss = 1000;

    //     // var mmmm = new Date().getTime();
    //     // var d = new Date();
    //     // d.setDate(d.getDate() - d.getDay());
    //     // console.log(d);

    //         var today = new Date();
    //     //  this.datesArray: Date[]=[];

    //     var d = new Date();

    //    d.setHours(d.getHours() + 3);
    //     // console.log(d);

    //     var n:number = 1;
    //     do { 
            
    //         var tomorrow = new Date(d.getTime() + (n * 24 * 60 * 60 * 1000));

    //          var parsedDate = tomorrow.toLocaleDateString();

    //          var epoch = tomorrow.valueOf()
        
    //         var datessssssss = tomorrow.getDate();
    //         var month = tomorrow.getMonth() + 1;
    //         var year = tomorrow.getFullYear();

    //         var fullDate = year + "-" + month + "-" + datessssssss;

    //         var date = new DateSet(fullDate,epoch);
    //         this.dateSetArray.push(date);
    //         // this.datesArray.push(tomorrow);
    //             n++; 
                
    //             console.log(this.dateSetArray);

    //         } 
            
    //         while(n<=datesss); 




        // var date = new Date(new Date().setDate(new Date().getDate() - 30));
        // console.log(date);
 }

incrementQuantity(product: Products){
    product.quantityInCart += 1;
    this.grabCost(this.stocksSelected);
    var newTotal = this.cartTotalPrice
    newTotal += product.cost;
    this.sharedCartSvc.incrementQuantityCostInCart(newTotal);

}

toggleCheckout(cartOrCheckout: string){
    this.sharedCartSvc.toggleCheckout(cartOrCheckout);
}


grabCost(stocksSelected: Products[]){
    var result = stocksSelected.map(function(a) {
        console.log("JJJJJKKKKKLLLLL");
        console.log(a.cost);
        return a.cost
    });

    
}

   

removeFromList(key: Products){
    var index = this.stocksSelected.indexOf(key, 0);
if (index > -1) {
   this.stocksSelected.splice(index, 1);
   console.log(this.stocksSelected);
   this.sharedCartSvc.addToProductArray(this.stocksSelected);
   if(this.stocksSelected.length == 0){

       this.sharedCartSvc.setProductCartUsed('false');
   } else {
       console.log("cart has products");
   }
}
}

 }
