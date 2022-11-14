const express = require('express')
const todoRouter = express.Router();
const { read } = require('./Todo.controller')
const { write } = require('./Todo.controller')
const { updateList } = require('./Todo.controller')
const { newList } = require('./Todo.controller')
todoRouter.route('/item').get(read);
todoRouter.route('/item').post(write);
todoRouter.route('/item/:id').put(updateList); 
todoRouter.route('/item').delete(newList);

module.exports = {todoRouter};