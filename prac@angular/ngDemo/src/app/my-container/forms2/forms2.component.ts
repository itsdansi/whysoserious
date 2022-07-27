import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component implements OnInit {
  myReactiveForm: FormGroup

  constructor() { }

  ngOnInit(){
    this.myReactiveForm = new FormGroup({
      username: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      course: new FormControl("Angular")
    })
  }
  selected = false
    formData = {
    username: '',
    email: '',
    course: ''
  }

  onSubmit(){
    // console.log(this.myReactiveForm);
    this.selected = true
    this.formData.username = this.myReactiveForm.value.username
    this.myReactiveForm.reset()
    
  }


}
