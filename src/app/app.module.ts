import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { ReadCarsComponent } from './cars/read-cars/read-cars.component';
import { CreateCarComponent } from './cars/create-car/create-car.component';
import { UpdateCarComponent } from './cars/update-car/update-car.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './route-guards/auth.guard';
import { AuthService } from './shared/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    ReadCarsComponent,
    CreateCarComponent,
    UpdateCarComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [DatePipe, AuthGuard, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
