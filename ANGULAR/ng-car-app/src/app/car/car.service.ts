import { Injectable } from '@angular/core';
import { car } from './car';
import { CARS } from './mock-car-list';

@Injectable()
export class CarService {

getCarList(): car []{
  return CARS;
}

getCarById(carId:number): car|undefined {
  return CARS.find(car => car.id == carId);

}

getCarCategoryList (): string []{

  return ['collection', 'cinema', 'occasion'];
}
}
