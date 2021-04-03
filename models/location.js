const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-cpmplexity");
const {CAR,BIKE,SEDAN,SUV,HATCHBACK,DIRTBIKE,CRUISER,SPORTSBIKE,PETROLE,CNG,DIESEL}= require('../constants');

const Location = mongoose.model('location', new mongoose.Schema({
                 locationName: {
                     type: String,
                     required:true,
                 },
                 fullAddress: {
                    type: String,
                    required:true,
                },
                 cityName: {
                    type: String,
                    required:true,
                    
                },
                pinCode: {
                    type: Number,
                    min : 100000,
                    required:true,
                }
               
}));

module.exports = {Location};