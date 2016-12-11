import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { TrippioHeaderComponent }  from './components/trippio-header.component';
import { TrippioFooterComponent }  from './components/trippio-footer.component';
import { TrippioHomeComponent }  from './components/trippio-home.component';
import { TripsListComponent }  from './components/trips-list.component';
import { NewTripComponent }  from './components/new-trip.component';

@NgModule({
  imports:      [ BrowserModule,
                  FormsModule,
                  RouterModule.forRoot([
                    {
                      path: '',
                      redirectTo: '/home',
                      pathMatch: 'full'
                    },
                    {
                      path: 'home',
                      component: TrippioHomeComponent
                    },
                    {
                      path: 'trips',
                      component: TripsListComponent
                    },
                    {
                      path: 'new-trip',
                      component: NewTripComponent
                    }
                  ])],
  declarations: [ AppComponent,
                  TrippioHeaderComponent,
                  TrippioFooterComponent,
                  TrippioHomeComponent,
                  TripsListComponent,
                  NewTripComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
