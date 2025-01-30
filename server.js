const app = require('./app');
const mongoose = require('mongoose');


(async function(){
  try{
    const con = await mongoose.connect(process.env.DATABASE);
    console.log('connected to database');
  }catch(err){
    console.log(err);
  }
}())


app.listen(process.env.PORT || 3000,()=> {
    console.log('listening');
})