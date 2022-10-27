import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private apiUrl: string = `${environment.baseUrl}/api/Cars`;

  constructor(private http: HttpClient) {}

  readAllCars(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createCar(carItem: any): Observable<any> {
    let headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.post(this.apiUrl, carItem, { headers: headers });
  }

  updateCarItem(carId: string, carItem: any): Observable<any> {
    let apiUrl: string = `${this.apiUrl}/${carId}`;
    let headers = new HttpHeaders({ 'content-type': 'application/json' });
    return this.http.put(apiUrl, carItem, { headers: headers });
  }

  deleteCarItem(carId: string): Observable<any> {
    let apiUrl: string = `${this.apiUrl}/${carId}`;
    return this.http.delete(apiUrl);
  }

  getById(carId: string): Observable<any> {
    let apiUrl: string = `${this.apiUrl}/${carId}`;
    return this.http.get(apiUrl);
  }
}
