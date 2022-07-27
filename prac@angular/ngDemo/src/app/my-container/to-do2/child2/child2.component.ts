import { Component, OnInit, Input,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  constructor() { }

  ngOnInit() {
  }


  @Input() boxColor:string = "";
  @Input() placeholderText:string = "";
  // @Input() userLength:number ;
 
  @Output() inputEvent = new EventEmitter()

  count:number = 0;
  onCreate(inpVal:HTMLInputElement){
    if(inpVal.value.length>0){
      this.count = this.count + 1;
      this.inputEvent.emit(inpVal.value)
    }
  }
}
