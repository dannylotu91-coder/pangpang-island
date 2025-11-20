const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();
const fs = require('fs-extra');

const uploadDir = path.join(__dirname,'..','uploads'); fs.ensureDirSync(uploadDir);
const storage = multer.diskStorage({ destination:(req,file,cb)=>cb(null,uploadDir), filename:(req,file,cb)=>cb(Date.now()+path.extname(file.originalname)) });
const upload = multer({ storage });
router.post('/upload', upload.single('image'), (req,res)=>{ if(!req.file) return res.status(400).json({error:'no file'}); res.json({url:'/uploads/'+req.file.filename}); });
router.get('/list', async (req,res)=>{ const files = await fs.readdir(uploadDir).catch(()=>[]); res.json(files.map(f => '/uploads/'+f)); });
module.exports = router;
