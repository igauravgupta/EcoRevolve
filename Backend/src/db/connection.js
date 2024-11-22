const mongoose = require("mongoose");
require("dotenv").config();

async function main(){
    await mongoose.connect(process.env.DB)
}
main().then(()=>{
    console.log("connected with db named as eco_revolve");
}).catch(err=>{
    console.log(err);
})