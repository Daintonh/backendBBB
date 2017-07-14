// Modules
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


// Components
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

import { HomePageComponent } from './homePage.component';


@NgModule({
    imports: [
        RouterModule.forChild([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomePageComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    exports: [ RouterModule ]

})

export class HomePageRoutingModule { }