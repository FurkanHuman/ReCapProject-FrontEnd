import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = 'https://localhost:44305/api/';

  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + "car/getalldto")
  }

  getCarsById(id: number): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + "car/Getalldtobyid?id=" + id)
  }

  getBrandsByCategory(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getbybrand?brandId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getColorsByCategory(colorId: number): Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "car/getbycolor?colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  getByColorsAndBrands(colorId: number, brandId: number) {
    let newpath = this.apiUrl + "car/getbrandandcolorid?brandId=" + brandId + "&colorId=" + colorId
    return this.httpClient.get<ListResponseModel<Car>>(newpath)
  }
}
