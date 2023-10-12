import { Component, OnInit } from '@angular/core';
import { car } from '../car';

@Component({
  selector: 'app-add-car',
  template: `
    <h2 class="center">Ajouer une voiture</h2>
    <app-car-form [car]="car"></app-car-form>
  `,
 
})
export class AddCarComponent implements OnInit {

    car: car;
  
  ngOnInit(){
    this.car = new car ();
  }

}
