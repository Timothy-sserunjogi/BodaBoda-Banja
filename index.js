//requires the express dependency to include express functionality
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const path = require('path')

server.set('view engine', 'pug');
server.set('views',path.join(__dirname,'views'))
server.get('/customer',(req, res)=>{
    res.render('customerDetails.pug')
    });    

    // server.get('/executive',(req, res)=>{
    //     res.render('saleExecutive.pug')
    //     });    
    
server.use(express.static('public'))

var bodyParser = require('body-parser');
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use('/', userRoutes)
mongoose.connect("mongodb://localhost:27017/bodaboda-banja",{ useNewUrlParser: true, useUnifiedTopology: true },function(err){
 
   if (err) throw err;
 
   console.log('Successfully connected');

});
server.get('/sign', (req, res) =>{
    res.sendFile(__dirname + "/login.html")
});

server.get('/Home', (req, res) =>{
    res.sendFile(__dirname + "/index.html")
});


//have the server listen to requests from browsers
server.listen(5000, function() {
    console.log('listening on 5000')
})

