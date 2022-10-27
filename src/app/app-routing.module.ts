import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { CarsComponent } from './cars/cars.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { ReadCarsComponent } from './cars/read-cars/read-cars.component';
import { UpdateCarComponent } from './cars/update-car/update-car.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './route-guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  {
    path: 'cars',
    component: CarsComponent,

    children: [
      { path: '', component: ReadCarsComponent },

      {
        path: 'create',
        component: CreateCarComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'update/:id',
        component: UpdateCarComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
