import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzashopService } from 'src/app/pizzashop/pizzashop.service';
import { Pizzashop } from '../pizzashop';

@Component({
  selector: 'app-pizza-get',
  templateUrl: './pizza-get.component.html',
  styleUrls: ['./pizza-get.component.css']
})
export class PizzaGetComponent implements OnInit {
pizzashops:Pizzashop[]=[];
  constructor(private route:ActivatedRoute,private service:PizzashopService) { }

  ngOnInit() {
    this.service.getPizzashops().subscribe(pizzashopList=>this.pizzashops=pizzashopList);
  }
  selectedPizza:Pizzashop;
  onSelection(pizza:Pizzashop){
    this.selectedPizza=pizza;
  }
}


