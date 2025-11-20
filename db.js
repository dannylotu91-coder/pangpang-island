const mongoose = require('mongoose');
require('dotenv').config();
module.exports = async function connectDB(){
  const uri = process.env.MONGO_URI;
  if(!uri){
    console.log('No MONGO_URI set. Skipping MongoDB connection (dev mode).');
    return;
  }
  await mongoose.connect(uri, { useNewUrlParser:true, useUnifiedTopology:true });
  console.log('Connected to MongoDB');
};
