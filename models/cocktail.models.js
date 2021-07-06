'use strict';

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CocktailSchema = new Schema({

    strDrink: String ,
    strDrinkThumb: String,
    idDrink: {
        type: String ,
        unique: true
    }
});

// This creates our model from the above schema, using mongoose's model method
var cocktailModel = new mongoose.model("favCocktail", CocktailSchema);

// Export the Article model
module.exports = cocktailModel;