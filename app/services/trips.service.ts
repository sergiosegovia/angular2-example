import { Injectable } from '@angular/core';

import { Trip } from '../models/trip';

import { TRIPS } from './mock.trips';

@Injectable()
export class TripsService {
  getTrips(){
    return TRIPS;
  }

  addTrips(trip : Trip){
    Promise.resolve(TRIPS).then((trips : Trip[]) => trips.push(trip));
  }
}
