const express = require('express');
const upload = require('../lib/Storage');
const api = express.Router();
const statusController = require('../controllers/userController');

api.post('/user', upload.single('image'), statusController.createUser);
api.get('/users', statusController.getUsers);
api.get('/user/search/:id', statusController.getUser);
api.put('/user/update/:id', statusController.updateUser);
api.delete('/user/delete/:id', statusController.deleteUser);
api.post('/user/login', statusController.login);

module.exports = api;