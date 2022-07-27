import { Component, OnInit } from '@angular/core';
import { CardService } from '../../cardServices/card.service';

@Component({
  selector: 'app-card4',
  templateUrl: './card4.component.html',
  styleUrls: ['./card4.component.css']
})
export class Card4Component implements OnInit {

    constructor(private _cardService: CardService) { 
    this._cardService.userName.subscribe(uname => this.userName = uname)
  }

  ngOnInit(): void {
  }

  userName:string = "Laxman"
  onUpdate(name : HTMLInputElement){
    this._cardService.userName.next(name.value)
  }

}
