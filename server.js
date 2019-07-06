//step1:include all modules
const express=require('express');
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const dbconfig=require('./DB');
const path=require('path');
const apiPizzaRouter=require('../Pizza-Shop/server/api-pizzashop-route');
const app=express();
//step2:configuration of db
mongoose.Promise=global.Promise;
mongoose.connect(dbconfig.DB,{useNewUrlParser:true}).then(
    ()=>console.log("database connect:"),
    (err)=>console.log("database not connected")
);
//step3: handling app static resource and api call
app.use(bodyparser.json());
app.use(cors());
//path.join(_dirname,'dist/my-app06')
//public : folder which contains all static resources
//.html,.jpg,.png,.css,.js)we will keep in one folder called public
app.use(express.static(path.join(__dirname,'public')));
//when server will start it will display below message
app.get('/',(req,resp)=>{
    //resp.send("<h1>Welcome To Express</h1>");
    resp.sendFile("index.html");
});
// to call apiEmployee route
app.use('/pizza',apiPizzaRouter);
//step4 : strating server
app.listen(4000,()=>{console.log("server listening at 4000")});