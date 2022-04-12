import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    console.log("Message from AfterViewInit");
  }

  ngOnInit(): void {
    console.log("Message from OnInit");
  }

}
