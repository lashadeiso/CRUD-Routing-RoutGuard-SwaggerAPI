import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/shared/services/car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css'],
})
export class UpdateCarComponent implements OnInit {
  //აქ  ViewChild ით შევდივართ ჩვენი ლოკალურ რეფერენსში ანუ form -ში
  //და ქვემოთ ვნახავთ რომ გავუსეტავთ მნიშვნელობებს
  @ViewChild('form') itemForm!: NgForm;

  carItemId!: string;
  currentCarItem!: any;
  constructor(
    private http: CarService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe //არ დაგვავიწყდეს DatePipe ის დამატება app.module.ts ის პროვაიდერებში
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.carItemId = res['id'];
      this.http.getById(this.carItemId).subscribe((res) => {
        if (res) {
          this.currentCarItem = res;
          //ამ ორში, getDate ფუნქციის საშუალებით ვიღებთ იმთარირებს რაც იყო მითითებული
          this.currentCarItem.year = this.getDate(this.currentCarItem.year);
          this.currentCarItem.arrivesIn = this.getDate(
            this.currentCarItem.arrivesIn
          );
          //---------------
          this.itemForm.setValue(this.currentCarItem);
        }
      });
    });
  }

  getDate(dateText: string): any {
    let tmp = new Date(dateText);
    return this.datePipe.transform(tmp, 'yyyy-MM-dd');
  }

  onFormSubmit(item: NgForm) {
    this.http.updateCarItem(this.carItemId, item.value).subscribe((res) => {
      if (res) {
        this.router.navigate(['/cars']);
      }
    });
  }
}
