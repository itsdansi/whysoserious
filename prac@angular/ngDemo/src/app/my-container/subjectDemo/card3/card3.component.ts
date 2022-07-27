import { Component, OnInit } from '@angular/core';
import { CardService } from '../../cardServices/card.service';

@Component({
  selector: 'app-card3',
  templateUrl: './card3.component.html',
  styleUrls: ['./card3.component.css']
})
export class Card3Component implements OnInit {

    constructor(private _cardService: CardService) { 
    this._cardService.userName.subscribe(uname => this.userName = uname)
  }

  ngOnInit(): void {
  }
  userName:string = "Arjun"
  onUpdate(name : HTMLInputElement){
    this._cardService.userName.next(name.value)
  }

}
