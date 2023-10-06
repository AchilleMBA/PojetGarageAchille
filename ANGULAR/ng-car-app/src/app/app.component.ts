import { Component, OnInit } from '@angular/core';
import { car } from './car';
import { CARS } from './mock-car-list';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {
  carList: car[] = CARS;
  carSelected: car|undefined;

  ngOnInit(){
    console.table(this.carList)
    
  }
  selectCar(carId: string){
    const id= +carId;
    const car: car|undefined = this.carList.find(car => car.id == +carId);
    if(car) {
      console.log( `vous avez demandez la voiture ${car.name}`)
      this.carSelected = car;
    }else{
      console.log(`Vous avez demandé une voiture qui n'existe pas`);
      this.carSelected = car;

    }

}

}
