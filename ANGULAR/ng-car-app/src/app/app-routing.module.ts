import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCarComponent } from './detail-car/detail-car.component';
import { ListCarComponent } from './list-car/list-car.component';

const routes: Routes = [
  { path: 'cars', component: ListCarComponent},
  { path: 'car/:id', component:DetailCarComponent},
  { path: '', redirectTo: 'cars', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
