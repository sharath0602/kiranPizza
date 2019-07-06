import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { PizzaAddComponent } from './pizzashop/pizza-add/pizza-add.component';
import { PizzaGetComponent } from './pizzashop/pizza-get/pizza-get.component';
import { PizzaDeleteComponent } from './pizzashop/pizza-delete/pizza-delete.component';
import { PizzaEditComponent } from './pizzashop/pizza-edit/pizza-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PizzaAddComponent,
    PizzaGetComponent,
    PizzaDeleteComponent,
    PizzaEditComponent,
    

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
