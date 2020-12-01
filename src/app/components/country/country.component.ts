import {Component, OnInit} from '@angular/core';
import {CountriesService} from '../../services/countries.service';
import {CountryDto} from '../../models/country-dto';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  constructor(public countriesService: CountriesService) {
  }


  ngOnInit(): void {
  }

}
