const Giaovien = require('../models/GiaoVien');

class GiaovienController {
    static themThongTinGiaoVien(req, res) {
        const newData = req.body;
        Giaovien.create(newData)
            .then((result) => {
                res.status(201).json(result);
            })
            .catch((err) => {
                res.status(500).json({ error: err });
            });
    }
}

module.exports = GiaovienController;
