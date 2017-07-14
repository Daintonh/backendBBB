import { Component, AfterViewInit, OnInit } from '@angular/core';
import { Portfolio } from '../portfolio/model/portfolio';
import { PortfolioService } from '../portfolio/service/portfolio.service';

@Component({
    moduleId: module.id,
    selector: 'portfolio',
    templateUrl: 'portfolio.component.html',
    styleUrls: ['portfolio.component.css']
})

export class PortfoloComponent implements OnInit { 

     public portfolioArray: Portfolio[]  = [];

       public imageSrc: string;

       private imageArray: String[] = [];

        selectedFiles: FileList;
        // currentUpload: Upload;

    constructor(private portfolioService: PortfolioService) { }

    ngOnInit(){
        this.getStock();
        this.getUpdatedUser();
        // this.getUpdatedUser();

 }


getStock(){
    this.portfolioArray = []
    
    this.portfolioService.grabStockArray()
        .subscribe(image => {
            console.log(image);
            console.log(image);
            // this.setImage(stock);
            // this.imageSrc = null;
            this.grabImageUrl(image);
            this.portfolioArray.push(image);
            // this.imageArray.push(stock.imageUrl);

            console.log(this.portfolioArray);

        },
        err => {
            console.error("unable to add bug -", err);
        });
    }



grabImageUrl(currentImage: Portfolio){


    this.portfolioService.stockStorageRef.child(currentImage.imageUrl).getDownloadURL().then(url => 
    
    // console.log(url)
    currentImage.imageStorageRef = url
    
    
        
    ).catch(function(error) {
// Handle any errors
console.log(error);
});


    }

// detectFiles(event) {

//     this.selectedFiles = event.target.files;
//   }

//   uploadSingle(currentImage?: Portfolio) {
      
//     let file = this.selectedFiles.item(0)
//     this.currentUpload = new Upload(file);
//     this.upSvc.uploadPortfolio(this.currentUpload, "portfolio");
//     // window.location.reload();
      
//   }

//    updateBug(newImage?: Portfolio) {
//        if (newImage) {
//         const currentBugRef = this.portfolioService.portfolioRef.child(newImage.id);
//         console.log(newImage.id);

//         let file = this.selectedFiles.item(0)
//         this.currentUpload = new Upload(file);
//         this.upSvc.pushUpload(this.currentUpload,newImage.id, "portfolio");



//         // newImage.id = null;
//         // currentBugRef.update(newImage);
//        } else {
//            console.log("No crash bigash");
//        }
        
        
//     }

    getUpdatedUser() {
        this.portfolioService.changedListener()
            .subscribe(updatedUser => {
                const userIndex = this.portfolioArray.map(index => index.id).indexOf(updatedUser['id']);
                this.portfolioArray[userIndex] = updatedUser;
                
            },
            err => {
                console.error("Unable to get updated bug - ", err);
            });
    }


 }
