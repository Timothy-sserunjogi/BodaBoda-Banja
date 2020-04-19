const express = require('express');
const router = express.Router();
const User = require('../models/userModels');
const path = require('path');

router.get('/executive', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', 'salesExecutive.html'));
})

    router.post("/addsalesExecutive", async (req, res) => {
        try{
            var myData = new User(req.body);
            await myData.save()
            console.log('Sales executive has been added')
            res.redirect('/mangoes')
        }catch (error){
                res.status(400).send("unable to save to database");
            }
        })    

        router.get('/mangoes',async(req, res) => {  
            try {
              let items = await User.find()
              if (req.query.fname){
              items = await User.find({fname:req.query.fname})
                  }
                  res.render('salesExecutivelist.pug', { users: items })
                } catch (err) {
                  res.status(400).send("unable to find items in the database");
                }
              });
    

router.get('/customers', (req, res) => {
    res.sendFile(path.join(__dirname, "../views", "/customerDetails.html")); 
});

module.exports = router;            

