import { Component, OnInit } from '@angular/core';
import { car } from './car';
import { CARS } from './mock-car-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  carList: car[] = CARS;

  ngOnInit(){
    console.table(this.carList)
    this.selectCar(this.carList[2]);
  }
  selectCar(car: car){
    console.log(`Vous avez cliqué sur la voiture ${car.name}`);
}

}
