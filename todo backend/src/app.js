const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const morgan = require("morgan");
app.use(bodyParser.json())
const {todoRouter} = require('./Todolist/Todo.router');

app.use('/list', todoRouter);

const errorHandler = (err, req, res, next) =>{
    console.log(err)
    res.send(err)
}

const routeNoteExist = (req, res, next) =>{
    res.send(`${req.path} does not exist`);
};

app.use(morgan("dev"))
module.exports = app