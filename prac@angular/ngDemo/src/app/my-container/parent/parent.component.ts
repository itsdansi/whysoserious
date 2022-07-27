import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proSelected:boolean = false;
  selProduct:any
  addToCartMsg:any

  onSelect(product:string){
    this.proSelected = true
    this.selProduct = product
  }

  onAddToCart(product:string){
    this.addToCartMsg = product    
  }
 

}
