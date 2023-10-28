const express = require('express');
const router = express.Router();
const UserRegister = require('../models/registrer_user');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
    try {
        const { username, email, password, confirm_password } = req.body;
        const existUser = await UserRegister.findOne({ username });

        if (existUser) {
            return res.status(400).json({ message: 'Username is already in use.' });
        }

        // Check if passwords match
        if (password !== confirm_password) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = new UserRegister({
            username,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(201).json({ message: 'Registration successful.' });

    } catch (err) {
        // Error handling on the front-end
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
