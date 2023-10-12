import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { car } from '../car'; 
import { CarService } from '../car.service';

@Component({
  selector: 'app-edit-car',
  template: `
    <h2 class="center">Editer {{car?.name}}</h2> 
    <p *ngIf="car" class=center>
      <img [src]="car.picture">
    </p> 
    <app-car-form *ngIf="car" [car]="car"></app-car-form>
  `,
  styles: []
})
export class EditCarComponent implements OnInit {

  car: car | undefined; 

  constructor(
    private route: ActivatedRoute,
    private carService: CarService
  ) { }

  ngOnInit() {
    const carId: string | null = this.route.snapshot.paramMap.get('id');
    this.car = carId ? this.carService.getCarById(+carId) : undefined;
  }
}

