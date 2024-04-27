const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./database.json');
const db = low(adapter);
const router = express.Router();

const jwtSecretKey = 'dsfdsfsdfdsvcsvdfgefg';

router.post('/', (req, res) => {
    const { email, password } = req.body;

    const user = db
        .get('users')
        .value()
        .filter((user) => email === user.email);

    if (user.length === 1) {
        bcrypt.compare(password, user[0].password, function (_err, result) {
            if (!result) {
                return res.status(401).json({ message: 'Invalid password' });
            } else {
                let loginData = {
                    email,
                    signInTime: Date.now(),
                };

                const token = jwt.sign(loginData, jwtSecretKey);
                res.status(200).json({ message: 'success', token });
            }
        });
    } else if (user.length === 0) {
        bcrypt.hash(password, 10, function (_err, hash) {
            db.get('users').push({ email, password: hash }).write();

            let loginData = {
                email,
                signInTime: Date.now(),
            };

            const token = jwt.sign(loginData, jwtSecretKey);
            res.status(200).json({ message: 'success', token });
        });
    }
});

router.post('/verify', (req, res) => {
    const tokenHeaderKey = 'jwt-token';
    const authToken = req.headers[tokenHeaderKey];
    try {
        const verified = jwt.verify(authToken, jwtSecretKey);
        if (verified) {
            return res.status(200).json({ status: 'logged in', message: 'success' });
        } else {
            return res.status(401).json({ status: 'invalid auth', message: 'error' });
        }
    } catch (error) {
        return res.status(401).json({ status: 'invalid auth', message: 'error' });
    }
});

router.post('/check-account', (req, res) => {
    const { email } = req.body;

    const user = db
        .get('users')
        .value()
        .filter((user) => email === user.email);

    res.status(200).json({
        status: user.length === 1 ? 'User exists' : 'User does not exist',
        userExists: user.length === 1,
    });
});

module.exports = router;
