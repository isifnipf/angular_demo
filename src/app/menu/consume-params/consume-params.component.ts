import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-consume-params',
  templateUrl: './consume-params.component.html',
  styleUrls: ['./consume-params.component.scss']
})
export class ConsumeParamsComponent implements OnInit {

  id: string | null = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => this.id = param.get('id'));
  }

}
