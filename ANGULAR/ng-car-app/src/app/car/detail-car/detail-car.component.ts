import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styles: [
  ]
})
export class DetailCarComponent implements OnInit {
  
  carList: car [];
  car: car | undefined;

  constructor (
    private route: ActivatedRoute, 
    private router: Router,
    private carService: CarService
    ) { }

  ngOnInit (){
    
    const carId: string | null= this.route.snapshot.paramMap.get('id');
    if(carId){
    this.carService.getCarById(+carId)
    .subscribe(car => this.car = car)
    
    }
  }

  deleteCar(car: car){
    this.carService.deleteCarById(car.id)
    .subscribe(() => this.goToCarList());
  }

  goToCarList (){
    this.router.navigate(['/cars']);
  }

  goToEditCar(car: car){
    this.router.navigate(['/edit/car', car.id]);
  }
}
