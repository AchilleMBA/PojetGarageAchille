import { Component } from '@angular/core';
import { CARS } from '../mock-car-list';
import { car } from '../car';

@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styles: [
  ]
})
export class ListCarComponent {

  carList: car[] = CARS;

  

}
