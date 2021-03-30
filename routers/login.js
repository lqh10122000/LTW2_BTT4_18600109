const express = require('express');
const login_router = express.Router();


login_router.get('/', function(req, res) {
    res.locals.title = 'Login';
    res.render('../routers/login.ejs');
});



module.exports = login_router;