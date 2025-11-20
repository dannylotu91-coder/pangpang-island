const express = require('express'); const router = express.Router();
const User = require('../models/User');
// admin dashboard: require simple admin token via env ADMIN_PASSWORD for demo
router.get('/dashboard', async (req,res)=>{
  const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';
  // very simple check for demo: ?key=ADMIN_PASSWORD
  if(req.query.key !== adminPassword) return res.status(403).json({error:'forbidden'});
  const users = await User.find().select('-password').limit(50);
  res.json({users});
});
module.exports = router;
