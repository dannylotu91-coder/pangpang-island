require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

// connect DB
connectDB().catch(err=>console.warn('DB connect failed', err && err.message));

// routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/bookings', require('./routes/bookings'));
app.use('/api/rooms', require('./routes/rooms'));
app.use('/api/payments', require('./routes/payments'));
app.use('/api/admin', require('./routes/admin'));
app.use('/api/images', require('./routes/images'));

app.get('/', (req,res)=> res.json({message: 'Pangpang Island Backend running'}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Listening on', PORT));
