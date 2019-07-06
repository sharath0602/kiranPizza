import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PizzaAddComponent } from './pizzashop/pizza-add/pizza-add.component';


import { PizzaDeleteComponent } from './pizzashop/pizza-delete/pizza-delete.component';
import { PizzaEditComponent } from './pizzashop/pizza-edit/pizza-edit.component';

const routes: Routes = [
  {path:'pizza/create',component:PizzaAddComponent},
  {path:'pizza/edit/:pizzaId',component:PizzaEditComponent},
  {path:'pizza/delete/:pizzaId',component:PizzaDeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
