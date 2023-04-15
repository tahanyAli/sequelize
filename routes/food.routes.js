'use strict';

const express = require('express');
const router = express.Router();

const { Food } = require('../models/index');

//Routes

router.get('/food', getFood);
router.post('/food', createFood);
router.get('/food/:id', getOneFood);
router.delete('/food/:id', deleteFood)
router.put('/food/:id', updateFood)

async function getFood(req, res) {
    let food = await Food.findAll();
    res.status(200).json({
        food
    })
}

async function createFood(req, res){
    console.log(req.body);
    const newFood = req.body;
    const food = await Food.create(newFood);
    res.status(201).json(food);
}
async function getOneFood(req, res){
    const id = req.params.id;
    let food = await Food.findOne({
        where: {id: id}
    });
    res.status(200).json(food)
}

async function deleteFood(req, res){
    const id = req.params.id;
    let deletedFood = await Food.destroy({
        where: {id: id}
    });
    res.send(204).json(deletedFood);
}
async function updateFood(req, res) {
    const id = req.params.id;
    const obj = req.body;
    const food = await Food.findOne({
        where: {id: id}
    });
    const updatedFood = await food.update(obj);

    //OR
    // const updatedFood = await Food.update(
    //     {foodName: obj.foodName},
    //     {where: {id: id}}
    // )
    res.status(200).json(updatedFood);

    
}
module.exports = router;