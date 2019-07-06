// import { Component, OnInit } from '@angular/core';
// import { PizzashopService } from 'src/app/pizzashop/pizzashop.service';
// import { ActivatedRoute } from '@angular/router';


// @Component({
//   selector: 'app-pizza-delete',
//   templateUrl: './pizza-delete.component.html',
//   styleUrls: ['./pizza-delete.component.css']
// })
// export class PizzaDeleteComponent implements OnInit {
//   constructor(private route:ActivatedRoute, private pizzaService:PizzashopService) { }

//   ngOnInit() {
//     let pizzaId=+this.route.snapshot.paramMap.get("pizzaId");
//     this.pizzaService.deletePizzashop(pizzaId);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzashopService } from 'src/app/pizzashop/pizzashop.service';

@Component({
  selector: 'app-pizza-delete',
  templateUrl: './pizza-delete.component.html',
  styleUrls: ['./pizza-delete.component.css']
})
export class PizzaDeleteComponent implements OnInit {

  
  constructor(private route:ActivatedRoute, private pizzaService:PizzashopService) { }

  ngOnInit() {
    let pizzaId=this.route.snapshot.paramMap.get("pizzaId");
    this.deletePizzashop(pizzaId);
  }
  deletePizzashop(pizzaId)
  {
    this.pizzaService.deletePizzashop(pizzaId);
  }
}
