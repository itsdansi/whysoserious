import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }

  product = "Laptop"
  category = "Electrical and Electronic"
   messageAlert(){
        alert("Thanks for clicking!")
    }

  userName = new Subject<any>()
}
