import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {CountryDto} from '../../models/country-dto';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css']
})
export class CountriesListComponent implements OnInit {

  constructor(private countriesService: CountriesService) {
  }

  countries: CountryDto[] = [];

  ngOnInit(): void {
    this.getCountries();
  }


  getCountries(): void {
    this.countriesService.getCountries().subscribe(
      value => {
        this.countries = value;
        console.log(this.countries);
      },
      error => {
        console.log(error);
      }
    );
  }

  getCountry(countryName: string): void {
    this.countriesService.country = this.countries.find(x => x.name === countryName);
  }


}
