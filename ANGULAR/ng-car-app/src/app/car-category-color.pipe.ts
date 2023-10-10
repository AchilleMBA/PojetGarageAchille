import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carCategoryColor'
})
export class CarCategoryColorPipe implements PipeTransform {

  transform(category: string): string {
    let color: string;

    switch (category) {
      case 'collection':
        color = 'green lighten-1';
        break;

      case 'occasion':
        color = 'orange lighten-1';
        break;

      case 'cinema':
        color = 'yellow lighten-1';
        break;

       default:
        color = 'grey';
        break;
      
    }

    return `chip ${color}`;
  }

}
