const express = require('express');
const cors = require('cors')
const app = express();
const port = 4040;
const chef = require('./data/chef-data.json');
const food = require('./data/food-recipe.json');


app.use(cors())

app.get('/', (req,res)=>{
    res.send('Welcome to Chef && Food API');
})

app.get('/chef', (req, res)=>{
    res.send(chef)
})

app.get('/chef/:chefId', (req, res)=>{
    const id = parseInt(req.params.chefId);
    const singleChef = chef.find(cd=> cd.id === id);
    res.send(singleChef)
})

app.get('/food', (req, res)=>{
    res.send(food)
})

app.get('/food/:foodId',(req, res)=>{
    const id = parseInt(req.params.foodId);
    console.log(id);
    const singleFood = food.find(fd => fd.foodId === id);
    res.send(singleFood)
})

app.listen(port, ()=>{
console.log(port);
})