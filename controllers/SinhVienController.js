// controllers/SinhVienController.js
const SinhVien = require('../models/SinhVien');
const BaoCao = require('../models/BaoCao');
const Thuctap = require('../models/ThucTap');

class SinhVienController {
    static themThongTinSinhVien(req, res) {
        const newData = req.body;

        // Tìm kiếm xem có bản ghi nào có thông tin giống newData không
        SinhVien.findOne(newData)
            .then((existingRecord) => {
                if (existingRecord) {
                    // Nếu đã tồn tại, trả về thông tin của bản ghi đã tồn tại
                    res.status(200).json(existingRecord);
                } else {
                    // Nếu chưa tồn tại, tạo mới bản ghi
                    SinhVien.create(newData)
                        .then((result) => {
                            res.status(201).json(result);
                        })
                        .catch((err) => {
                            res.status(500).json({ error: err });
                        });
                }
            })
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    }
    static TrangThaiSinhVien = async (req, res) => {
        try {
            const { SinhVienID } = req.params;
            const updatedData = req.body; // Dữ liệu cần cập nhật

            const sinhvien = await SinhVien.findByIdAndUpdate(
                SinhVienID,
                updatedData,
                {
                    new: true,
                },
            );
            res.json(sinhvien);
        } catch (error) {
            res.status(500).json({ error: 'Lỗi cập nhật thông tin sinh viên' });
        }
    };
}

module.exports = SinhVienController;
