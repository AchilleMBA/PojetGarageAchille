import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { car } from '../car';
import { CARS } from '../mock-car-list';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styles: [
  ]
})
export class DetailCarComponent implements OnInit {
  
  carList: car [];
  car: car | undefined;

  constructor (private route: ActivatedRoute) { }

  ngOnInit (){
    this.carList = CARS ;
    const carId: string | null= this.route.snapshot.paramMap.get('id');
    if(carId){
      this.car = this.carList.find(car => car.id == +carId)
    
    }
    
  }

}
