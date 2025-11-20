const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const UserSchema = new mongoose.Schema({
  name:String,
  email:{type:String,unique:true,required:true},
  password:String,
  role:{type:String,enum:['user','admin'],default:'user'},
  createdAt:{type:Date,default:Date.now}
});
UserSchema.pre('save', async function(next){
  if(!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
UserSchema.methods.comparePassword = function(candidate){ return require('bcryptjs').compare(candidate,this.password); };
module.exports = mongoose.model('User', UserSchema);
