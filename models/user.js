const mongoose = require("mongoose");
const Joi = require("joi");


const User = mongoose.model('user', new mongoose.Schema({
                 firstName: {
                     type: String,
                     required:true,
                     minLength:5,
                     maxLength:50,
                 },
                 lastName: {
                    type: String,
                    required:true,
                    minLength:5,
                    maxLength:50,
                },
                 password: {
                    type: String,
                    required:true,
                    minLength:5,
                    maxLength:1000,
                },
                email: {
                    type: String,
                    required:true,
                    unique:true,
                    minLength:5,
                    maxLength:255,
                },
                mobileNo: {
                    type: Number,
                    required:true,
                    min:1000000000,
                    unique:true,
                },
                walletMoney: {
                    type: Number,
                    default: 100000,
                },
               
                isAdmin: {
                    type: Boolean,
                    default: false,
                },
               
               
}));




module.exports = {User};