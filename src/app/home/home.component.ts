import { Component, OnInit } from '@angular/core';
import { Flight } from '../models/flight.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  dateDepart01 = new Date(08/15/2018);
  dateArrive01 = new Date(08/15/2018);

  masterFlightList: Flight[] = [
    new Flight(1, 'Portland', 'Los Angeles', this.dateArrive01 , this.dateDepart01),
    new Flight(2, 'Los Angeles', 'Portland', this.dateArrive01 , this.dateDepart01)
  ]
}
