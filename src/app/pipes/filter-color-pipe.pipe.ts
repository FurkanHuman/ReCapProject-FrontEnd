import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../models/color';

@Pipe({
  name: 'filterColorPipe'
})
export class FilterColorPipePipe implements PipeTransform {

  transform(value: Color[], filterColor: string): Color[] {
    filterColor = filterColor ?
      filterColor.toLowerCase() :
      "";

    return filterColor ?
      value.filter((c: Color) => c.name.toLowerCase().indexOf(filterColor) !== -1) :
      value;
  }

}
