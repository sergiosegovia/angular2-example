import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';

import { TripsService } from '../services/trips.service';

@Component({
  selector: 'new-trip',
  templateUrl: 'app/views/new-trip.html',
  styleUrls: ['assets/css/new-trip.css'],
  providers: [ TripsService ]
})
export class NewTripComponent {

  constructor(private _tripsService : TripsService, private _router : Router){

  }

  createTrip(
    title : string,
    country : string,
    city : string,
    arrival : string,
    departure : string,
    description : string
  ){
    let trip : Trip = new Trip(title, country, city, arrival, departure, description);
    this._tripsService.addTrips(trip);
    this._router.navigate(['/trips']);
  }
}
