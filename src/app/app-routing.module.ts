import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavComponent } from './nav/nav.component';
import { AuthComponent } from './auth/auth.component';
import { HotelsComponent } from './hotels/hotels.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { HotelOneComponent } from './hotel-one/hotel-one.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'hotels', component: HotelsComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'hotels/:hotelId', component: HotelOneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
