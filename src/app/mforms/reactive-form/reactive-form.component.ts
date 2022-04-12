import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm = new FormGroup({
    firstName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required]),
    xpCheck: new FormControl(''),
    typeLang: new FormControl('',[Validators.required]),
    langSelect: new FormControl('',[Validators.required]),
  });
  programmingLanguages = ['TS', 'JS', 'C#'];
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.reactiveForm.valid) {return;}    
    console.log(this.reactiveForm.value);
  }

}
