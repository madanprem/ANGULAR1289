
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
@Component({
 selector: 'app-country',
 templateUrl: './country.component.html',
 styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
 countries;//storinng response
 constructor(private data: DataService) { }
 ngOnInit() {
 this.data.getCountries().subscribe(d => {
 this.countries = d;
 })
 }
 
 }
