import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { PizzashopService } from 'src/app/pizzashop/pizzashop.service';

@Component({
  selector: 'app-pizza-add',
  templateUrl: './pizza-add.component.html',
  styleUrls: ['./pizza-add.component.css']
})
export class PizzaAddComponent implements OnInit {
  angForm:FormGroup

  constructor(private fb:FormBuilder,private pizzaService:PizzashopService) { 
  this.createForm();}

  ngOnInit() {
  }
  createForm(){
    this.angForm=this.fb.group({
      pizzaId:['',Validators.required],
      pizzaName:['',Validators.required],
      price:['',Validators.required]
    });
  }
  addPizzashop(pizzaId,pizzaName,price){
    this.pizzaService.addPizzashop(pizzaId,pizzaName,price);
  }

}
