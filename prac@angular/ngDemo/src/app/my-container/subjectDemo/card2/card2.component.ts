import { Component, OnInit } from '@angular/core';
import { CardService } from '../../cardServices/card.service';

@Component({
  selector: 'app-card2',
  templateUrl: './card2.component.html',
  styleUrls: ['./card2.component.css']
})
export class Card2Component implements OnInit {

   constructor(private _cardService: CardService) { 
    this._cardService.userName.subscribe(uname => this.userName = uname)
  }

  ngOnInit(): void {
  }

  userName:string ="Amit"
   onUpdate(name : HTMLInputElement){
    this._cardService.userName.next(name.value)
  }

}
