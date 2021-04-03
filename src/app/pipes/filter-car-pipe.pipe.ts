import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../models/car';

@Pipe({
  name: 'filterCarPipe'
})
export class FilterCarPipePipe implements PipeTransform {


  transform(value: Car[], filterCar: string): Car[] {
    filterCar = filterCar ?
      filterCar.toLowerCase() :
      "";

    return filterCar ?
      value.filter((c: Car) => c.brandName.toLowerCase().indexOf(filterCar) !== -1) :
      value;
  }
}
