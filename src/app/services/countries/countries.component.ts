import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAll().subscribe((countries: any) => this.countries = countries);
  }

}
