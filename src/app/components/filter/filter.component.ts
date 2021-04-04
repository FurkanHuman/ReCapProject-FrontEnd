import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  colors: Color[] = [];
  colorId: number = 0;
  brandId: number = 0;
  brands: Brand[] = [];
  cars: Car[] = [];
  filterBrand: number;
  filterColor: number;
  constructor(private carService: CarService,
    private colorService: ColorService,
    private brandService: BrandService,) { }

  ngOnInit(): void {
    this.getBrands()
    this.getColors()
  }
  getBrandsAndColorsId(brandId: number, colorId: number) {
    this.carService.getByColorsAndBrands(colorId, brandId).subscribe(response => {
      this.cars = response.data
    })
  }
  selectBrand(brandId: number) {
    if (this.filterBrand == brandId) { return true; }
    else {
      return false;
    }
  }

  selectColor(colorId: number) {
    if (this.filterColor == colorId) { return true; }
    else {
      return false;
    }
  }
  getBrands() {
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data;
    })
  }
  getColors() {
    this.colorService.getColors().subscribe(response => {
      this.colors = response.data;
    })
  }

}
