require('dotenv').config();
const express = require("express")
const app = express();
const listen =require("./config/listen");
const database = require("./config/database")
const mongoose = require("mongoose")




let result = " "
for (let i = 1; i <= 5; i++) {
    result = result + "**";
    console.log(result)

}


let store = " "
for (let w = 1; w <= 5; w++) {
    store  = store  + "@";
    console.log(store )

}

let world = "";
for(let u =1;u<=8;u++){
    world = world + "#"
    console.log(world)
}





app.get('/', (req, res) => {
    res.send("result :" + result)
})
//listen export//
listen(app);


//mongoose exports
database(mongoose);
