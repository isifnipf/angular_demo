import { Component, OnInit } from '@angular/core';

interface People {
  name: string;
  age: number;
  country: string;
}

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  arrPeople: People[] = [
    {
      name: 'John',
      age: 25,
      country: 'USA'
    },
    {
      name: 'Xristos',
      age: 30,
      country: 'GR'
    },
    {
      name: 'Michael',
      age: 45,
      country: 'UK'
    },
    {
      name: 'Angelo',
      age: 57,
      country: 'IT'
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
