require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
async function run(){ await mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/pangpang'); const email=process.env.ADMIN_EMAIL||'admin@pangpang.com'; const pass=process.env.ADMIN_PASSWORD||'admin123'; let admin = await User.findOne({email}); if(!admin){ admin = new User({name:'Admin', email, password: pass, role:'admin'}); await admin.save(); console.log('Admin created', email); } else { console.log('Admin exists'); } process.exit(); } run().catch(e=>{console.error(e); process.exit(1);});