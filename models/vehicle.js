const mongoose = require("mongoose");
const Joi = require("joi");
const passwordComplexity = require("joi-password-cpmplexity");
const {CAR,BIKE,SEDAN,SUV,HATCHBACK,DIRTBIKE,CRUISER,SPORTSBIKE,PETROLE,CNG,DIESEL}= require('./constants');
//const Location = require('./location');

const Vechile = mongoose.model('vechile', new mongoose.Schema({
                 vechicleModel: {
                     type: String,
                     required:true,
                 },
                 vechileOwner: {
                    type: String,
                    required:true,
                },
                 vechileNumber: {
                    type: String,
                    required:true,
                    unique: true,
                },
                vechileType: {
                    type: String,
                    enum:[CAR,BIKE],
                },
                vechileSubcategory: {
                    validate: {
                        validator: function(value){
                            if(this.vehicleType===CAR){
                                return [SEDAN,SUV,HATCHBACK].includes(value)                  
                            }else if(this.vehicleType===BIKE){
                                return [DIRTBIKE,CRUISER,SPORTSBIKE].includes(value) 
                            } 
                        }
                    }
                },
                vechileColor: {
                    type: String,
                    required:true,
                },
                location: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref : 'location',
                },
                vechileImage: {
                    type: String,
                    required:true,
                },
                pricePerHour: {
                    type: Number,
                    required:true,
                },
                fuelType: {
                    type: String,
                    enum:[PETROLE,CNG,DIESEL],
                },
               
}));

module.exports={Vechile};