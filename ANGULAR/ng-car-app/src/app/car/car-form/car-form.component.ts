import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
})
export class CarFormComponent implements OnInit {
  @Input() car: car;
  categories: string[];

  constructor (
    private carService: CarService,
    private router:Router
    ) { }

  ngOnInit(){
    this.categories = this.carService.getCarCategoryList();

  }

  hasCategory(category:string): boolean{
    return this.car.category.includes(category);

  }

  selectCategory($event: Event, category: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked) {
      this.car.category.push(category);
    }else{
      const index = this.car.category.indexOf(category);
      this.car.category.splice(index, 1);
    }

    isCategoryValid(category: string): boolean { // Cette fonction était mal définie dans votre code initial.
      if (this.car.category.length === 1 && this.hasCategory(category)) {
        return false;
      }
      return true; // Ajoutez un return true pour le cas où la condition n'est pas satisfaite.
    }
  
    onSubmit() { // Renommez la fonction "onsubmit" en "onSubmit" pour respecter la convention de nommage.
      console.log('Submit form!');
      this.router.navigate(['/car', this.car.id]);
    }
  }
}
