const express = require('express'); const router = express.Router();
const Room = require('../models/Room');
router.post('/add', async (req,res)=>{ try{ const r=new Room(req.body); await r.save(); res.json(r);}catch(e){res.status(500).json({error:e.message});} });
router.get('/list', async (req,res)=>{ try{ const list=await Room.find().sort({createdAt:-1}); res.json(list);}catch(e){res.status(500).json({error:e.message});} });
module.exports = router;
