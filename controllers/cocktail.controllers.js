'use strict';
const axios = require('axios');

const cocktailModel = require('../models/cocktail.models')

const testAPI = function (req, res) {
    res.send('Your API Is Runing')
}

const getCocktail = function (req, res) {
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic';

    axios.get(url).then(result => {
        res.json(result.data);
    }).catch(error => {
        console.log(error);
    })
}

const addFavCocktail = function (req, res) {
    const { strDrink, strDrinkThumb, idDrink } = req.body;

    const addNewFavCocktail = new cocktailModel({
        strDrink: strDrink,
        strDrinkThumb: strDrinkThumb,
        idDrink: idDrink
    })
    addNewFavCocktail.save();
    res.send('Done add fav Cocktail')
}


const getAllFavCocktail = function (req, res) {

    cocktailModel.find({}, (err, Data) => {
        res.json(Data);
    })
}


const deleteFavCocktail = function (req, res) {
    const idDrink = req.params.idDrink;

    cocktailModel.remove({ idDrink: idDrink }, (err, Data) => {
        cocktailModel.find({}, (err, Data) => {
            res.json(Data);
        })
    })

}

const updateFavCocktail = async function (req, res) {
    const index = req.params.index;
    const { strDrink, strDrinkThumb, idDrink } = req.body;

    cocktailModel.find({}, (err, Data) => {
        Data.map((obj, idx) => {
            if (idx == index) {
                obj.strDrink = strDrink
                obj.strDrinkThumb = strDrinkThumb
                obj.idDrink = idDrink
                obj.save();
            }
        })
        res.json(Data);
    })

}

module.exports = {
    testAPI,
    getCocktail,
    addFavCocktail,
    getAllFavCocktail,
    deleteFavCocktail,
    updateFavCocktail
}
