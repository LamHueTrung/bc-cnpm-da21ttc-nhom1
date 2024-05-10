const express = require('express');
const router = express.Router();
const GiaovienController = require('../controllers/GiaoVienController');

router.post('/themthongtingiaovien', GiaovienController.themThongTinGiaoVien);

module.exports = router;
