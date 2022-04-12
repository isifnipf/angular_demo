import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getArray(){
    return ['One', 'Two', 'Three'];
  }
}
