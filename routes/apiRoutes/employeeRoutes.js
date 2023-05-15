const express = require('express');
const router = express.Router();
const db = require('../../db/database');
const inputCheck = require('../../utils/inputCheck');

// Get all employees and their roles and their managers
router.get('/employees', (req, res) => {
    const sql = `SELECT employees.*, 
    roles.title AS role_title, 
    roles.salary AS role_salary, 
    managers.first_name AS manager_first_name, 
    managers.last_name AS manager_last_name 
FROM employees 
LEFT JOIN roles ON employees.role_id = roles.id
LEFT JOIN employees managers ON employees.manager_id = managers.id`;
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
