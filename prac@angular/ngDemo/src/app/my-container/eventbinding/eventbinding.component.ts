import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

   msg:string = "";
   clearVal:string = "";  
  showName(){
    this.msg = "Your name is Dansi";
  }
  showAddress(){
    this.msg = "Your address is Bharatpur";
  }
  showPhone(){
    this.msg = "Your name is 9832541734";
  }
  myInputInfo(data:HTMLInputElement){
    this.msg = data.value
    this.clearVal = "";

  } 
 
  // clearValue() {
  //   this.clearVal = '';
  // }
}
