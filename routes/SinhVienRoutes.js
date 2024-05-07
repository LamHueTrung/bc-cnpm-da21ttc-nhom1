const express = require('express');
const router = express.Router();
const SinhvienController = require('../controllers/SinhVienController');
const TintucController = require('../controllers/TinTucController');
const ThuctapController = require('../controllers/ThucTapController');

router.get('/tintuc', TintucController.layThongBao);
router.get('/danhsachsinhvien', SinhvienController.layDanhSachSinhVien);
router.get('/donthuctap', ThuctapController.layDanhSachThuctap);

router.post('/themthongtin', SinhvienController.themThongTinSinhVien);
router.post('/themthongbao', TintucController.themThongBao);
router.post('/dangkythuctap', ThuctapController.DangKyThucTap);

router.put(
    '/capnhattrangthai/:SinhVienID',
    SinhvienController.TrangThaiSinhVien,
);
router.put('/xoadonthuctap/:DTTID', SinhvienController.xoadonthuctap);

module.exports = router;
