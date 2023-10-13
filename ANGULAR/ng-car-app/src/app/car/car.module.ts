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
import { AddCarComponent } from './add-car/add-car.component';
import { SearchCarComponent } from './search-car/search-car.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';


const carRoutes: Routes = [
  {path: 'edit/car/:id', component: EditCarComponent, canActivate: [AuthGuard]},
  {path: 'car/add', component:AddCarComponent, canActivate: [AuthGuard]},
  { path: 'cars', component: ListCarComponent, canActivate: [AuthGuard]},
  { path: 'car/:id', component:DetailCarComponent, canActivate: [AuthGuard]},
]



@NgModule({
  declarations: [
    ListCarComponent,
    DetailCarComponent,
    BorderCardDirective,
    CarCategoryColorPipe,
    CarFormComponent,
    EditCarComponent,
    AddCarComponent,
    SearchCarComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(carRoutes)
  ],
  providers: [CarService]
})
export class CarModule { }
