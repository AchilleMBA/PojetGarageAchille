import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { car } from '../car'; // Corrected casing
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {
  @Input() car: car; // Corrected casing
  categories: string[];

  constructor (
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.categories = this.carService.getCarCategoryList();
  }

  hasCategory(category: string): boolean {
    return this.car.category.includes(category);
  }

  isCategoryValid(category: string): boolean {
    if (this.car.category.length === 1 && this.hasCategory(category)) {
      return false;
    }
    if (this.car.category.length > 2 && !this.hasCategory(category)) {
      return false;
    }
    return true; // Add a return true for cases where the conditions are not met.
  }

  selectCategory($event: Event, category: string) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.car.category.push(category);
    } else {
      const index = this.car.category.indexOf(category);
      this.car.category.splice(index, 1);
    }
  }

  onSubmit() { // Renamed from onsubmit to onSubmit
    console.log('Submit form!');
    this.router.navigate(['/car', this.car.id]);
  }
}
