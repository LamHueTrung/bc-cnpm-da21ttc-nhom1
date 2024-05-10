const express = require('express');
const cors = require('cors');
const db = require('./config/db/index');
const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');
const fastcsv = require('fast-csv');

const SinhVienRoutes = require('./routes/SinhVienRoutes');
const GiaoVienRoutes = require('./routes/GiaoVienRoutes');
const TaikhoanRoutes = require('./routes/DangKyRoutes');

const app = express();
const port = 3001;
const path = require('path');

app.use(cors());
app.use(express.json());

// kết nối db
db.connect();

//routes
app.use('/taikhoan', TaikhoanRoutes);
app.use('/student', SinhVienRoutes);
app.use('/teacher', GiaoVienRoutes);

app.listen(port, () => {
    console.log('API server is running on port 3001');
});
