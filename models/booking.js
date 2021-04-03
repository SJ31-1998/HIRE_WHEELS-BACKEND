const mongoose = require("mongoose");

const Booking = mongoose.model('booking', new mongoose.Schema({
                 pickUpDate: {
                     type: String,
                     required:true,
                 },
                 location: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref : 'location',
                },
                 dropOffDate: {
                    type: String,
                    required:true,
                },
                 bookingDate: {
                    type: String,
                    required:true,       
                },
                amount: {
                    type: Number,
                    required:true,
                },
                vehicle: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref : 'vehicle',
                },
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref : 'user',
                },
}));

module.exports = {Booking};