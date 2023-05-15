const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// get all roles
router.get('/roles', (req, res) => {
    const sql = `SELECT * FROM roles`;
    const params = [];
    db.all(sql, params, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
        }
        res.json({
            message: 'success',
            data: rows
        });
    });
});


module.exports = router;
