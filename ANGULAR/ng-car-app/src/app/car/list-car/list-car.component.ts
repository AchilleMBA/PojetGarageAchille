import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { car } from '../car';
import { CarService } from '../car.service';


@Component({
  selector: 'app-list-car',
  templateUrl: './list-car.component.html',
  styles: [
  ]
})
export class ListCarComponent {

  carList: car[];

  constructor (
    private router: Router,
    private carService: CarService
    
    ){}

    ngOnInit(){

      this.carService.getCarList()
      .subscribe(carList => this.carList = carList);

    }

  goToCar(car: car){
    this.router.navigate(['/car', car.id]);
  }

  

}
