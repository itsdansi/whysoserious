import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   @Input() productSelected:boolean = false;
   @Input() selectedProduct:any
   @Output() addToCartMsg = new EventEmitter<any>();


   onAddToCart(){
    this.addToCartMsg.emit(this.selectedProduct)
  }

}
 