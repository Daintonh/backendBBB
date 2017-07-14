import { NgModule, ApplicationRef, ModuleWithProviders } from '@angular/core';
import { BookingModule } from '../homePage/booking/booking.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { CoreModule } from '../core/core.module';
import { ProductsModule } from './products/products.module';
import { HomePageRoutingModule } from './homePage-routing.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ProductsComponent } from './products/products.component';
import { GetTheAppComponent } from './getTheApp/getTheApp.component';
import { PortfoloComponent } from './portfolio/portfolio.component';
import { TestimonialComponent } from './testimonials/testimonials.component';
import { LocationComponent } from './locations/locations.component';
import { AboutUsComponent } from './aboutUs/aboutUs.component';
import { BookingComponent } from './booking/booking.component';
import { HeaderComponent } from './header/header.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactFormComponent } from './contactForm/contactForm.component';
import { FooterComponent } from './footer/footer.component';
import { GoogleMapsComponent } from './googleMaps/googleMaps.component';
import { CartPurchasingBoxComponent } from './cartPurchasingBox/cartPurchasingBox.component';




import { HeaderModule } from './header/header.module';
import { ContactFormModule } from './contactForm/contactForm.module';
import { LocationsModule } from './locations/locations.module';
import {CartPurchasingBoxModule} from './cartPurchasingBox/cartPurchasingBox.module';
// import {AgmMap} from '../../node_modules/@agm/core/directives/map'

import { SharedCartService } from './sharedCart/sharedCard';

@NgModule({
    imports: [CartPurchasingBoxModule,ContactFormModule,LocationsModule, ProductsModule,CoreModule, HomePageRoutingModule,PortfolioModule, BookingModule, HeaderModule,FormsModule, AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCwyYoVPLnM3q29a2Ayo2ljkVLEHzE1j0E'
    }), BrowserModule ],

    declarations: [CartPurchasingBoxComponent, ProductsComponent,GetTheAppComponent, PortfoloComponent, TestimonialComponent,
    LocationComponent, AboutUsComponent, BookingComponent, HeaderComponent,
    PricingComponent, ContactFormComponent, FooterComponent,GoogleMapsComponent],

    exports: [CartPurchasingBoxComponent, ProductsComponent,GetTheAppComponent, PortfoloComponent, TestimonialComponent,
    LocationComponent, AboutUsComponent, BookingComponent, HeaderComponent,
    PricingComponent, ContactFormComponent, FooterComponent, GoogleMapsComponent],

    providers: [SharedCartService]

})

export class HomePageModule {

}