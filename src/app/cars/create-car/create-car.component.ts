import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.css'],
})
export class CreateCarComponent implements OnInit {
  constructor(
    private http: CarService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  onFormSubmit(item: NgForm) {
    this.http.createCar(item.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/cars']);
      }
    });
  }
}
