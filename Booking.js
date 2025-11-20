const mongoose = require('mongoose');
const BookingSchema = new mongoose.Schema({
  name:String, email:String, phone:String, date:String, time:String, guests:Number, createdAt:{type:Date,default:Date.now}
});
module.exports = mongoose.model('Booking', BookingSchema);
