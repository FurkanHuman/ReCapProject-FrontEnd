import { Pipe, PipeTransform } from '@angular/core';
import { Brand } from '../models/brand';

@Pipe({
  name: 'filterBrandPipe'
})
export class FilterBrandPipePipe implements PipeTransform {


  transform(value: Brand[], filterBrand: string): Brand[] {
    filterBrand = filterBrand ?
      filterBrand.toLowerCase() :
      "";

    return filterBrand ?
      value.filter((b: Brand) => b.name.toLowerCase().indexOf(filterBrand) !== -1) :
      value;
  }
}
