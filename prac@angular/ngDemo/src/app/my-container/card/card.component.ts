import { Component, OnInit } from '@angular/core';
import { CardService } from '../cardServices/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(private _cardService: CardService) { {
    
  }}
  product:string="";
  category:string="";
  ngOnInit(): void {
    this.product = this._cardService.product
    this.category = this._cardService.category
  }

  btnClicked(){
    this._cardService.messageAlert();
  }

  
}
