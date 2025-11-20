const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

router.post('/register', async (req,res)=>{
  try{
    const {name,email,password} = req.body;
    const user = new User({name,email,password});
    await user.save();
    res.json({message:'registered'});
  }catch(err){ res.status(400).json({error:err.message}); }
});

router.post('/login', async (req,res)=>{
  try{
    const {email,password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({error:'Invalid credentials'});
    const ok = await user.comparePassword(password);
    if(!ok) return res.status(400).json({error:'Invalid credentials'});
    const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET || 'dev', {expiresIn:'7d'});
    res.json({token, user:{id:user._id,name:user.name,email:user.email,role:user.role}});
  }catch(err){ res.status(500).json({error:err.message}); }
});

module.exports = router;
