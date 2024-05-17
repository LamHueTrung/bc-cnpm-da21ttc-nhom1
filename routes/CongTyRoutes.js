const express = require('express');
const router = express.Router();
const CongTyController = require('../controllers/CongTyController');
const TintucController = require('../controllers/TinTucController');
const TaikhoanRoutes = require('../controllers/TaiKhoanController');
const ThuctapController = require('../controllers/ThucTapController');

router.get('/tintuc', TintucController.layThongBao);
router.get('/danhsachcongty', CongTyController.layDanhSachCongty);
router.get('/dangnhaptaikhoan', TaikhoanRoutes.layDanhSachTaikhoan);
router.get('/donthuctap', ThuctapController.layDanhSachThuctap);

router.post('/themthongbao', TintucController.themThongBao);
router.post('/dangkythongtin', CongTyController.Dangkythongtin);
router.put('/xoacongty/:CTID', CongTyController.xoacongty);

module.exports = router;
