import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  { path: '', redirectTo: 'cars', pathMatch: 'full'},
  {path: '**', component:PageNotFoundComponent},
  // {path: '**', component:PageNotFoundComponent}, intercepte tote les routes, CHEMIN A METTRE A LA FIN.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
