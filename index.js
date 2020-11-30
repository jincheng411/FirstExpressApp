const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/firstApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('mongo connection open')
    })
    .catch(error => {
        console.log('mongo error!!')
        console.log(error)
    })

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello')
})

app.get('/products/', async (req, res) =>{
    const products = await Product.find({});
    res.render('products/index', {products})
})

app.listen(3000,()=>{
    console.log('port 3000')
})