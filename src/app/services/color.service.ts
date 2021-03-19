import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Color } from '../models/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  currentColor: Color;
  apiUrl = 'https://localhost:44305/api/';

  constructor(private httpClient: HttpClient) { }

  getColors(): Observable<ListResponseModel<Color>> {
    let newPath=this.apiUrl+"color/getall"
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
   
}
