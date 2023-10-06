import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carCategoryColor'
})
export class CarCategoryColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
