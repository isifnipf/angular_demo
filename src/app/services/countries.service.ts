import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Country } from './country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Country[]>{
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
  }
}
