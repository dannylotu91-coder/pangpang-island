const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
  title:String, description:String, price:Number, capacity:Number, createdAt:{type:Date,default:Date.now}
});
module.exports = mongoose.model('Room', RoomSchema);
