import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/shared/services/car.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-read-cars',
  templateUrl: './read-cars.component.html',
  styleUrls: ['./read-cars.component.css'],
})
export class ReadCarsComponent implements OnInit {
  carsList: any[] = [];
  constructor(private httpService: CarService) {}

  ngOnInit(): void {
    this.readCars();
  }
  readCars() {
    this.httpService.readAllCars().subscribe((res) => {
      this.carsList = res;
    });
  }

  deletaCar(carItemId: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.httpService.deleteCarItem(carItemId).subscribe((res) => {
          if (res) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            this.readCars();
          }
        });
      }
    });
  }
}
