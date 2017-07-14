import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { BookingModule } from './homePage/booking/booking.module';
import { AppRoutingModule } from './app-routing.module';

import { HomePageModule } from './homePage/homePage.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './homePage/homePage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { GetTheAppComponent } from './homePage/getTheApp/getTheApp.component';
// import { PortfoloComponent } from './homePage/portfolio/portfolio.component';
// import { TestimonialComponent } from './homePage/testimonials/testimonials.component';
// import { LocationComponent } from './homePage/locations/locations.component';
// import { AboutUsComponent } from './homePage/aboutUs/aboutUs.component';
// import { BookingComponent } from './homePage/booking/booking.component';
// import { HeaderComponent } from './homePage/header/header.component';
// import { PricingComponent } from './homePage/pricing/pricing.component';
// import { ContactFormComponent } from './homePage/contactForm/contactForm.component';
// import { FooterComponent } from './homePage/footer/footer.component';

//bootstrap means that this is where the project is starting from if we don't have routing

@NgModule({
    imports: [ BrowserAnimationsModule, BrowserModule, CoreModule, BookingModule, AppRoutingModule, HomePageModule ],
    declarations: [ AppComponent, HomePageComponent],
    bootstrap: [ AppComponent ]

})

export class AppModule { }