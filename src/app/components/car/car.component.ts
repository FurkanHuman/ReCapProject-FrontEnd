import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: Car[] = [];
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'])
        this.getBrandsByCategory(params['brandId']);
      else if (params['colorId'])
        this.getColorsByCategory(params['colorId']);
      else {
        this.getCars();
      }
    });
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
    })
  }

  getColorsByCategory(colorId: number) {
    this.carService.getColorsByCategory(colorId).subscribe(response => {
      this.cars = response.data
    })
  }
  getBrandsByCategory(brandId: number) {
    this.carService.getBrandsByCategory(brandId).subscribe(response => {
      this.cars = response.data
      console.log(response)
    })
  }
}