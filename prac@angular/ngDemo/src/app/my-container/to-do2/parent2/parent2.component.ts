import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  users:Array<string>=[];
  userLength = this.users.length
  pushUsers(data:string){
    this.users.push(data);
  }
  onRemoveUsers(item:number){
    this.users.splice(item, 1)
  }

  // for Admins
  admins:Array<string> =[];
  pushAdmins(data:string){
    this.admins.push(data);
  }
  onRemoveAdmins(item:number){
    this.admins.splice(item, 1)
  }
}
