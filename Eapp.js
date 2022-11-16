const path = require('path');
const fs =require('fs');
const bcrypt = require('bcrypt');

const dotenv = require('dotenv')
//const razorpay = require('razorpay');


const mongoose = require('mongoose');


const express = require('express'); //importing express module
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');



const cors = require('cors');

const compression = require('compression');


const app = express();  // using func of express to handling things for us or showing a way 
dotenv.config();



app.use(compression());

app.use(cors());



const userRoutes = require('./routes/users');
const expenseRoutes = require('./routes/expense');

const purchaseRoutes = require('./routes/purchaseRoutes');
const forgotRoutes =  require('./routes/password');


app.use(express.json())//instead of body parson json

//app.use(bodyParser.urlencoded({ extended:false })); //registers a middleware and does body parsing for us. and has a next funciton.///plugging into middlewares.

//app.use(express.static(path.join(__dirname,'public')));



/*
app.use('/user',userRoutes);




app.use('/purchase',purchaseRoutes)


app.use('/expense',expenseRoutes)



app.use('/pass', forgotRoutes)



app.use((req,res)=>{
    res.sendFile(path.join( __dirname, `views/${req.url}`))
})


*/


mongoose.connect('mongodb+srv://IliyasO7:K3M7cqxy7ymKz4qE@cluster0.eqgxahg.mongodb.net/?retryWrites=true&w=majority').then(result=>{
    app.listen(5000);
    console.log('connected');
})