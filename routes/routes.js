const express = require('express');
const router = express.Router();
const {getItems, getItem, cartItems, createItem, updateItem, deleteItem} = require('../functions/orderfunc');

router.route('/getItems').get(getItems);
router.route('/cartItems').get(cartItems);
router.route('/getItem/:id').get(getItem);
router.route('/createItem').post(createItem);
router.route('/updateItem/:id').put(updateItem);
router.route('/deleteItem/:id').delete(deleteItem);

module.exports = router;