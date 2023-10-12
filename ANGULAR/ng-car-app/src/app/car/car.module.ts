import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCarComponent } from './list-car/list-car.component';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { BorderCardDirective } from './border-card.directive';
import { CarCategoryColorPipe } from './car-category-color.pipe';
import { RouterModule, Routes } from '@angular/router';
import { CarService } from './car.service';
import { FormsModule } from '@angular/forms';
import { CarFormComponent } from './car-form/car-form.component';
import { EditCarComponent } from './edit-car/edit-car.component';


const carRoutes: Routes = [
  {path: 'edit/car/:id', component: EditCarComponent},
  { path: 'cars', component: ListCarComponent},
  { path: 'car/:id', component:DetailCarComponent},
]



@NgModule({
  declarations: [
    ListCarComponent,
    DetailCarComponent,
    BorderCardDirective,
    CarCategoryColorPipe,
    CarFormComponent,
    EditCarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(carRoutes)
  ],
  providers: [CarService]
})
export class CarModule { }
