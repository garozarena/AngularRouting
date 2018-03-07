import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  countries: any;

  constructor(private http: HttpClient) {
    this.getCountries();
  }

  ngOnInit() {

  }
  getCountries() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe(
      data => this.countries = data
    );
    console.log(this.countries);
  }
}
