const express = require('express');
const router = express.Router();
const SinhvienController = require('../controllers/SinhVienController');
const TintucController = require('../controllers/TinTucController');

router.get('/tintuc', TintucController.layThongBao);

router.post('/themthongtin', SinhvienController.themThongTinSinhVien);
router.post('/themthongbao', TintucController.themThongBao);

router.put(
    '/capnhattrangthai/:SinhVienID',
    SinhvienController.TrangThaiSinhVien,
);

module.exports = router;
