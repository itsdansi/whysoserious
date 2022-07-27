import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toDoList:Array<string> = []

  onAdd(todo:any){
    this.toDoList.push(todo.value)
  }
  onRemove(index:number){
    this.toDoList.splice(index,1)
  }

}
