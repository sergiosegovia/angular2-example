import { Component } from '@angular/core';

import { Trip } from '../models/trip';

import { TripsService } from '../services/trips.service';

@Component({
  selector: 'trips-list',
  templateUrl: 'app/views/trips-list.html',
  styleUrls: ['assets/css/trips-list.css'],
  providers: [ TripsService ]
})
export class TripsListComponent  {
  public trip : Trip;
  public selectedTrip : Trip;
  public trips : Trip[];
  public editor : boolean;

  constructor(private _tripsService : TripsService){
    this.trips = this._tripsService.getTrips();
    this.editor = false;
  }

  selectTrip(trip : Trip){
    this.trip = trip;
    this.selectedTrip = this.trip;
    this.editor = true;
    console.log(this.selectedTrip);
  }

  toggleEditor(val : boolean){
    this.editor = val;
    this.selectedTrip = null;
  }
}
