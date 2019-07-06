import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pizzashop } from '../pizzashop/pizzashop';

@Injectable({
  providedIn: 'root'
})
export class PizzashopService {
   uri='http://localhost:4000/pizza';
  

  constructor(private httpClient:HttpClient) { }

  //const URI='http://localhost:4000/emp';

  getPizzashops():Observable<Pizzashop[]>{
    return this.httpClient.get<Pizzashop[]>(`${this.uri}`+'/allPizza');
  }
  addPizzashop(id,name,pri){
    let pizza={
      pizzaId:id,
      pizzaName:name,
      price:pri
    };
    return this.httpClient.post(`${this.uri}`+'/addPizza',pizza)
    .subscribe(res=>console.log("New Pizzashop registered successfully"));
  }
  
 //'http://localhost:4000/delete/:empId'
 deletePizzashop(pizzaId:number):any {
    
    this.httpClient.delete(`${this.uri}`+'/delete/'+`${pizzaId}`).subscribe(res=>console.log("deleted"));
 }

 updatePizzashop(pizzaId,pri):any{
   return this.httpClient.put(`${this.uri}`+'/update/'+pizzaId+'/'+pri,{})
   .subscribe(res=>console.log(pizzaId+"New pizza registered successfully"));
 }
}


