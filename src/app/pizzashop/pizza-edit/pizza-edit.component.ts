import { Component, OnInit, Input } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { PizzashopService } from 'src/app/pizzashop/pizzashop.service';
import { ActivatedRoute } from '@angular/router';
import { Pizzashop } from '../pizzashop';

@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.css']
})
export class PizzaEditComponent implements OnInit {
@Input()
pizzashop:Pizzashop;
  constructor(private route:ActivatedRoute,private service:PizzashopService) { 
   
  }

  ngOnInit() {
  }
  updatePizzashop(pizzaId:number,pri:string){
    this.service.updatePizzashop(pizzaId,pri);
  }
  
}
