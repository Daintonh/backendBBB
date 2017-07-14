import { Component,Input, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes } from '@angular/core';
import { Products } from './model/products';
import { ProductsService } from './service/products.service';
import { PortfolioService } from '../portfolio/service/portfolio.service';
import { SharedCartService } from '../sharedCart/sharedCard';

@Component({
    moduleId: module.id,
    selector: 'products',
    templateUrl: 'products.component.html',
    styleUrls: ['products.component.css']

})

export class ProductsComponent implements OnInit { 

    public stockArray: Products[] = [];
    public imageArray: String[] = [];
    public productArray: Products[]= [];

    // productSelected = "false";
    public myString = "ddd"
    public stocksSelected: Products[] = [];

    constructor(private productSvc: ProductsService, private portfolioSvc: PortfolioService, private sharedCartSvc: SharedCartService){

    }

    ngOnInit(){
        this.myString = "ddd";
        this.getStock();
        this.sharedCartSvc.ProductCart.subscribe(message => this.stocksSelected = message)

    }

    switchClass(){
        this.myString = "sss";
    }

// setClass(product: Products){
//     // console.log(product);
//     let classes = {

//         overlay: product.addedToCart == "notTapped",
//         overlayTapped: product.addedToCart == "tapped" || product.addedToCart == null

//     }
//     return classes


// }

    getStock(){
    this.stockArray = []
    
    this.productSvc.getAddedBugs()
        .subscribe(stock => {
            stock.addedToCart = "notTapped";
            stock.quantityInCart = 1;
            console.log(stock);
            // this.setImage(stock);
            // this.imageSrc = null;
            // this.grabImageUrl(image);
            // stock.addedToCart = "booked";
            this.stockArray.push(stock);
            // this.imageArray.push(stock.imageUrl);
            this.grabImageUrl(stock);
            // console.log(this.portfolioArray);

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }


    grabImageUrl(currentImage: Products){


    this.portfolioSvc.stockStorageRef.child(currentImage.imageUrl).getDownloadURL().then(url => 
    
    // console.log(url)
    currentImage.imageStorageRef = url
    
    
        
    ).catch(function(error) {
// Handle any errors
console.log(error);
});


    }

selectedTrue;

addToArray(staff?: Products){
    
    this.selectedTrue = true;
    if (staff) {
        var tapped =+ 1;
        // this.staffIds.push(staff.id);
        // this.dict.push(staff.id)
        // var dict = []; // create an empty array

        this.productArray.indexOf(staff) === -1 ? this.productArray.push(staff) && this.sharedCartSvc.setProductCartUsed('true') : this.removeFromList(staff);
    console.log(this.productArray);
 
    } else {
        console.log("staff not entered");
    }
    
}

removeFromList(key){
    var index = this.productArray.indexOf(key, 0);
if (index > -1) {
   this.productArray.splice(index, 1);
   console.log(this.productArray);
   if(this.productArray.length == 0){
       this.sharedCartSvc.setProductCartUsed('false');
   } else {
       console.log("cart has products");
   }
}
}



    addToCart(product: Products){
            product.quantityInCart = 1;
            // this.productArray.push(product);

            this.addToArray(product);
            this.sharedCartSvc.addToProductArray(this.productArray);
            console.log(this.productArray);
    }
} 
