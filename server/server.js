const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

const mongoUri = 'mongodb+srv://admin:<password>@cluster0.1snva.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.set('useCreateIndex',true);

/// MIDDLEWARE
app.use(bodyParser.json());

/// MODELS
const { User } = require('./models/user');


const port = process.env.PORT || 3001;
app.listen(port,()=>{
    console.log(`Started on port ${port}`)
})