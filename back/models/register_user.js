const mongoose = require('mongoose');

const userRegisterSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    confirm_password: String
});

const UserRegister = mongoose.model('UserRegister', userRegisterSchema, 'users');

module.exports = UserRegister;
