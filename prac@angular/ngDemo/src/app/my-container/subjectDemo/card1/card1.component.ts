import { Component, OnInit } from '@angular/core';
import { CardService } from '../../cardServices/card.service';

@Component({
  selector: 'app-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.css']
})
export class Card1Component implements OnInit {

  constructor(private _cardService: CardService) { 
    this._cardService.userName.subscribe(uname => this.userName = uname)
  }

  ngOnInit(): void {
  }

  userName = "Dansi"
  onUpdate(name : HTMLInputElement){
    // this.userName = name.value
    this._cardService.userName.next(name.value)
  }
}
