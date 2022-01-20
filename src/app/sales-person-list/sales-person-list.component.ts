import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList: SalesPerson[]=[
    new SalesPerson("Shital","Sadgir","shital@gmail.com",9000),
    new SalesPerson("Nilesh","Sadgir","shital@gmail.com",87900),
    new SalesPerson("Mital","Sadgir","shital@gmail.com",67900),
    new SalesPerson("ShiPileshtal","Sadgir","shital@gmail.com",2300),
    new SalesPerson("Ram","Sadgir","shital@gmail.com",1900)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
