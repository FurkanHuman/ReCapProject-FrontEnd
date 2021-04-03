import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  colors: Color[] = [];
  colorId: number;
  brandId: number;
  brands: Brand[] = [];
  cars: Car[] = [];
  images: CarImage[] = [];
  filterCar = "";
  filterBrand: number;
  filterColor: number;
  dataLoaded: boolean = false;
  imageBasePath = 'https://localhost:44305'
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId'] && params['colorId'])
        this.getBrandsAndColorsId(params['brandId'], params['colorId'])
      else if (params['brandId'])
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
  getSliderClassName(index: number) {
    if (index == 0) {
      return 'carousel-item active';
    } else {
      return 'carousel-item';
    }
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

  getBrandsAndColorsId(brandId: number, colorId: number) {
    this.carService.getByColorsAndBrands(colorId, brandId).subscribe(response => {
      this.cars = response.data
      console.log(response)
    })
  }
}