import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../countries.service';
import { Country } from '../country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

  countries: Country[] = [];
  constructor(private countriesService: CountriesService) { }

  ngOnInit(): void {
    this.countriesService.getAll().subscribe((countries: any) => this.countries = countries);
  }

}
