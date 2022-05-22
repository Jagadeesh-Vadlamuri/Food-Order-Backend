const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./routes/routes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

const PORT = process.env.PORT || 5000;

let URI = "mongodb+srv://Jagadeesh-Vadlamuri:ggwEokKGhSgGWnx3@cluster0.c42r0.mongodb.net/foodOrderApp?retryWrites=true&w=majority"

mongoose.connect(URI).then(() => {
    try{
        app.listen(PORT, () => {
            console.log("Mongo DB Connected on"+" "+PORT)
        })
    } catch(err){
        console.log(err)
    }
})
