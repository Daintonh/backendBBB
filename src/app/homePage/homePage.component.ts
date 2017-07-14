import {Component, ViewChild, ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { SharedCartService } from './sharedCart/sharedCard';
import { Products } from './products/model/products';
declare var $: any;
@Component({
    moduleId: module.id,
    selector: 'homepage',
    templateUrl: 'homePage.component.html',
    styleUrls: ['homePage.component.css']

})

export class HomePageComponent implements AfterViewInit, OnInit  {

    rootNode: any;
    cartShared: any;

    public productsCart: Products[]= [];

    public cartCost: number;
    public cartBeingUsed:string;

    constructor(rootNode: ElementRef,cartShared: SharedCartService) { 

        this.rootNode =  rootNode
        this.cartShared = cartShared
    }

    ngOnInit(){
        this.cartShared.ProductCart.subscribe(message => this.productsCart = message);
        this.cartShared.productsCartTotal.subscribe(total => this.cartCost = total);
        this.cartShared.cartUsed.subscribe(ddd => this.cartBeingUsed = ddd);
    }
        

    tooggleCart(){
        this.cartShared.toggleCheckout("Checkout");
    }


        ngAfterViewInit() {
        var self = this;
        $(self.rootNode.nativeElement).ready(function(){
            setInterval(checkScroll, 200);
        });

         function checkScroll() {
        var nav = $('.top-navs').first();

        if ($(self.rootNode.nativeElement).scrollTop() > 0 && !nav.hasClass('scrolling')) {
            nav.addClass('scrolling');
        } else if ($(self.rootNode.nativeElement).scrollTop() === 0 && nav.hasClass('scrolling')) {
            nav.removeClass('scrolling');

        }
    }
    }

     
}