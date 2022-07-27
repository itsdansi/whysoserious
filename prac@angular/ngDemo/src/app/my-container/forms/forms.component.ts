import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  formData = {
    username: '',
    email: '',
    course: ''
  }

   selected = false

  onSubmit(data: NgForm){
    this.selected = true
    this.formData.username = data.value.username,
    this.formData.email = data.value.email,
    this.formData.course = data.value.course

    data.reset()
  }
}