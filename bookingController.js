const Booking = require('../models/Booking');
exports.create = async (req,res)=>{ try{ const b=new Booking(req.body); await b.save(); res.json(b);}catch(e){res.status(500).json({error:e.message});} };
exports.list = async (req,res)=>{ try{ const list = await Booking.find().sort({createdAt:-1}); res.json(list);}catch(e){res.status(500).json({error:e.message});} };
