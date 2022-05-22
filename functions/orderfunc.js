const itemModel = require('../models/items');

const getItems = async(req, res) => {
    try{
        let items = await itemModel.find({}).sort({createdAt: "desc"});
        if(items){
            res.json(items)
        }
    } catch(e){
        console.log(e)
    }
}

const cartItems = async(req, res) => {
    try{
        let items = await itemModel.find({buttonText: 'Remove from Cart'});
        if(items) {
            res.json(items)
        }
    } catch (e){
        console.log(e)
    }
}

const getItem = async(req, res) => {
    try{
        let item = await itemModel.findById(req.params.id)
        if(item){
            res.json(item)
        }
    } catch(e){
        console.log(e)
    }
}

const createItem = async(req, res) => {
    try{
        let item = new itemModel(
        {
            image: req.body.image,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            createdAt: new Date(),
            start: 0
        }
    ) 

        const createdItem = await item.save();
        if(createdItem){
            res.send(createdItem)
        }
    } catch(e){
        console.log(e);
    }
}

const updateItem = async(req, res) => {
    try{
        let item = await itemModel.findByIdAndUpdate(req.params.id, req.body)
        if(item){
            res.send("Item Updated Successfully")
        }
    } catch(e) {
        console.log(e)
    }
}

const deleteItem = async(req, res) => {
    try{
        let item = await itemModel.findByIdAndDelete(req.params.id)
        if(item) {
            res.send("Item deleted Successfully")
        }
    } catch(e) {
        console.log(e)
    }
    
}

module.exports = {getItems, getItem, cartItems, createItem, updateItem, deleteItem}