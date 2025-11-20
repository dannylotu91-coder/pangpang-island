const express = require('express'); const router = express.Router();
const Booking = require('../models/Booking');
router.post('/create', async (req,res)=>{ try{ const b = new Booking(req.body); await b.save(); res.json(b);}catch(e){res.status(500).json({error:e.message});} });
router.get('/list', async (req,res)=>{ try{ const list = await Booking.find().sort({createdAt:-1}); res.json(list);}catch(e){res.status(500).json({error:e.message});} });
router.delete('/delete/:id', async (req,res)=>{ try{ await Booking.findByIdAndDelete(req.params.id); res.json({success:true}); }catch(e){res.status(500).json({error:e.message});} });
module.exports = router;
