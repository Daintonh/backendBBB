 import {Component} from '@angular/core';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';  

@Component({
    selector: 'testimonial',
    moduleId: module.id,
    templateUrl: 'testimonials.component.html',
    styleUrls: ['testimonials.component.css']


})

export class TestimonialComponent {
      url: any;
  name:string;
//   video: any = {id: 'wzrnuUOoFNM'};
  baseUrl:string = "https://www.youtube.com/embed/TtEkYFQS5Uw?modestbranding=1&showinfo=0&autoplay=1";
  constructor(private sanitizer: DomSanitizer) { 
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.baseUrl);    
  }

 }




//  import {Component} from '@angular/core';
// import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';  

// @Component({
//     selector: 'testimonial',
//     moduleId: module.id,
//     templateUrl: 'testimonials.component.html',
//     styleUrls: ['testimonials.component.css']


// })

// export class TestimonialComponent {
//      url: SafeResourceUrl;
//     constructor(sanitizer: DomSanitizer) {
//         this.url = sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/XHCVWWsQmUs');
//     }

//  }
