import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.scss']
})
export class ForLoopComponent implements OnInit {

  arrayNmbs = ['One', 'Two', 'Three', 'Four', 'Five'];

  data: string[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.data = this.dataService.getArray();
  }

}
