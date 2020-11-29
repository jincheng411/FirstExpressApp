const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/firstApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('mongo connection open')
    })
    .catch(error => {
        console.log('mongo error!!')
        console.log(error)
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p =>{
//     console.log(p)
// })
//     .catch(e => {
//         console.log(e)
//     })

const seedProducts = [
{
    name: 'Orangic Goddess Melon',
    price: 2.99,
    category: 'fruit'
},
{
    name: 'Orangic Blue Melon',
    price: 3.99,
    category: 'fruit'
},
{
    name: ' Goddess Cherry',
    price: 3.99,
    category: 'fruit'
},
{
    name: 'Orangic Celery',
    price: 2.99,
    category: 'fruit'
},
{
    name: 'Orangic Goddess Melon',
    price: 8.99,
    category: 'vegetable'
},
{
    name: 'Whole Milk',
    price: 5.99,
    category: 'dairy'
},
]

Product.insertMany(seedProducts)
.then(res =>{
    console.log(res)
})
.catch(err =>{
    console.log(err)
})