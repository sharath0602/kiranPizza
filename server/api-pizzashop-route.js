const express=require('express');
const app=express();
//we are creating api link for employee
const apiPizzaRouter=express.Router();
//we are importing employee schema
let Pizzashop=require('./pizzashop');

//get all employee
apiPizzaRouter.route('/allPizza').get((req,resp)=>{
    //resp.send("<h1>called All emp</h1>");
    //1.get data from mongodb
    Pizzashop.find((err,data)=>{
        if(err){
            resp.send("failure");
        }
        resp.send(data);
    });
});
//get employee by empId
apiPizzaRouter.route('/:pizzaId').get((req,resp)=>{
  
  // resp.send("<h1>called by empId</h1>");
  let p_pizzaId=req.params.pizzaId
  Pizzashop.find({pizzaId:p_pizzaId},(err,data)=>{
    if(err){
        resp.send("failed to load data for:"+p_pizzaId);
    }
    console.log(data);
    resp.send(data);
});
});
//get employee by empName
apiPizzaRouter.route('/pname/:pizzaName').get((req,resp)=>{
   // resp.send("<h1>called by empName</h1>");
   let p_pizzaName=req.params.pizzaName
  Pizzashop.find({pizzaName:p_pizzaName},(err,data)=>{
    if(err){
        resp.send("failed to load data for:"+p_pizzaName);
    }
    resp.send(data);
});
});
//add employee
apiPizzaRouter.route('/:addPizza').post((req,resp)=>{
    let body_pizzashop=new Pizzashop(req.body);
    // resp.send(employee);
     body_pizzashop.save().then(
         ()=>resp.send("New Pizzashop added to database"),
         (err)=>resp.send("failure of adding pizza details")
     );
    
});
//delete employee 
apiPizzaRouter.route('/delete/:pizzaId').delete((req,resp)=>{
   // resp.send("<h1>called delete by empId</h1>");
   //console.log("api called ");
    let p_pizzaId=req.params.pizzaId;
    Pizzashop.findOneAndDelete({pizzaId:p_pizzaId},(err,data)=>{
      if(err){
          resp.send("No records found");
      }
     // console.log(data+"removed")
     resp.send(data+"deleted records");
    });
    
});
//update employee
apiPizzaRouter.route('/update/:pizzaId').put((req,resp)=>{
   let p_pizzaId=req.params.pizzaId;
   let p_pri=req.params.pri;
   
    //resp.send("<h1>called update by  empId</h1>");
    Pizzashop.findOneAndUpdate({pizzaId:p_pizzaId},{price:p_pri},(err,data)=>{
        if(err){
            resp.send("failed to update");
        }
        resp.send("updated records for :"+p_pizzaId+" as "+p_pri);
      });
    });
module.exports=apiPizzaRouter;
