'use strict';

const express = require('express') // require the express package
const app = express() // initialize your express app instance

const cors = require('cors');

app.use(cors()) // after you initialize your express app instance

require('dotenv').config();
app.use(express.json());
// const axios = require('axios');

const PORT = process.env.PORT;

const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/cocktail', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect( process.env.ATLAS, { useNewUrlParser: true, useUnifiedTopology: true });

const {
    testAPI, getCocktail, addFavCocktail, getAllFavCocktail , deleteFavCocktail , updateFavCocktail
} = require('./controllers/cocktail.controllers');

// a server endpoint 
app.get('/', testAPI);

app.get('/cocktail', getCocktail);

app.post('/addFavCocktail', addFavCocktail);

app.get('/getAllFavCocktail', getAllFavCocktail);

app.delete('/deleteFavCocktail/:idDrink', deleteFavCocktail);

app.put('/updateFavCocktail/:index' , updateFavCocktail )

app.listen(PORT, () => {
    console.log(`This Is Your PORT : ${PORT}`);
}) // kick start the express server to work

