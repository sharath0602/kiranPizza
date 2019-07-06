const mongoose=require('mongoose');
const Schema=mongoose.Schema;
let Pizzashop = new Schema({
   pizzaId:{type:Number},
   pizzaName:{type:String},
   price:{type:String},
},{
    collection:'pizzashop'
});
module.exports=mongoose.model("Pizzashop",Pizzashop);
/*to access your document created in mongodb as an object
  we call mongoose.model('mongoose',mongoose)  */
