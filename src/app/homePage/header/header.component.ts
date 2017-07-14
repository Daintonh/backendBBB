import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'headerTop',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})

export class HeaderComponent { 

    goTo(location: string): void {
    window.location.hash = location;
    
}


}