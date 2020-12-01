import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CountryDto} from '../models/country-dto';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http: HttpClient) {
  }

  country: CountryDto;

  getCountries(): Observable<CountryDto[]> {
    return this.http.get<CountryDto[]>(`${environment.url}/get-all-countries`);
  }
}
