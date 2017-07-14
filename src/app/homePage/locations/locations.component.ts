import {Component, OnInit,AfterViewInit,trigger,state,style,transition,animate,keyframes} from '@angular/core';
import { StaffService } from '../locations/service/staff.service';
import { Staff } from '../locations/model/staff';

@Component({
    moduleId: module.id,
    selector: 'locations',
    templateUrl: 'locations.component.html',
    styleUrls: ['locations.component.css']

})

export class LocationComponent implements OnInit {

    public staffArray: Staff[]  = [];
    public name: string;
    public unitsSold: string;
    public earnings: string;


    constructor(private staffService: StaffService) { }

    ngOnInit(){
        this.getUser();
        // this.getUpdatedUser();
        this.name ="false";
        this.unitsSold ="false";
        this.earnings ="false";
 }


getUser(){
    this.staffArray = []
    this.staffService.grabUsersArray()
        .subscribe(staff => {
            console.log(staff);
            this.grabImageUrl(staff);
            this.staffArray.push(staff);
            console.log(this.staffArray);
            

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }

          grabImageUrl(currentStock: Staff){
          
              
              this.staffService.staffStorageRef.child(currentStock.imageUrl).getDownloadURL().then(url => 
                    
                    // console.log(url)
                    currentStock.imageStorageRef = url
                    // stock.imageUrl = url
                    
                       
                    ).catch(function(error) {
                // Handle any errors
                console.log(error);
            });
    }





    // getUpdatedUser() {
    //     this.staffService.changedListener()
    //         .subscribe(updatedUser => {
    //             const userIndex = this.staffArray.map(index => index.id).indexOf(updatedUser['id']);
    //             this.staffArray[userIndex] = updatedUser;
    //         },
    //         err => {
    //             console.error("Unable to get updated bug - ", err);
    //         });
    // }



// sortEarningsProperly(){
//     if(this.earnings === "false") {
//  this.staffArray.sort((a, b) => {
//     //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
//      this.earnings = "true";
//     if (a.earnings > b.earnings) return -1;
//     else if (a.earnings < b.earnings) return 1;
//     else return 0;
//   });
//     } else if (this.earnings === "true"){
//         this.earnings = "false";
//         this.staffArray.sort((a, b) => {
//             // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
//     if (a.earnings < b.earnings) return -1;
//     else if (a.earnings > b.earnings) return 1;
//     else return 0;
//   });
//     } else { 
//         console.log("davie");
//     }
// }


// sortNamesProperly(){
//     if(this.name === "false") {
//  this.staffArray.sort((a, b) => {
//      var first = a.name.toLowerCase(), second = b.name.toLowerCase();
//      this.name = "true";
//     if (first > second) return -1;
//     else if (first < second) return 1;
//     else return 0;
//   });
//     } else if (this.name === "true"){
//         this.name = "false";
//         this.staffArray.sort((a, b) => {
//             var first = a.name.toLowerCase(), second = b.name.toLowerCase();
//     if (first < second) return -1;
//     else if (first > second) return 1;
//     else return 0;
//   });
//     } else { 
//         console.log("davie");
//     }
// }


// sortUnitsSold(){

//       if(this.unitsSold === "false") {
//  this.staffArray.sort((a, b) => {
//     //  var first = a.name.toLowerCase(), second = b.name.toLowerCase();
//      this.unitsSold = "true";
//     if (a.unitsSold > b.unitsSold) return -1;
//     else if (a.unitsSold < b.unitsSold) return 1;
//     else return 0;
//   });
//     } else if (this.unitsSold === "true"){
//         this.unitsSold = "false";
//         this.staffArray.sort((a, b) => {
//             // var first = a.name.toLowerCase(), second = b.name.toLowerCase();
//     if (a.unitsSold < b.unitsSold) return -1;
//     else if (a.unitsSold > b.unitsSold) return 1;
//     else return 0;
//   });
//     } else { 
//         console.log("davie");
//     }
 

// }











}

 

