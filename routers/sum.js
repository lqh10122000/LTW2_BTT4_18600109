const express = require('express');
const routers = express.Router();
const User = require('../models/users');
const ensureLogged = require('../middlewares/ensure-logged');



routers.use(ensureLogged);

routers.get('/', function(req, res) {{

  
    res.locals.result = 0;
    res.locals.title = 'Tổng 2 SỐ';
    // res.locals.currentUser = found;
    res.render('sum');

    

}});




routers.post('/logout', function(req, res)
{
    res.locals.title = 'Logout';

    res.redirect('/auth/login');
});




routers.post('/', function(req, res){

    const number1 = Number(req.body.number1);
    const number2 = Number(req.body.number2);
    const result = number1 + number2;
    res.locals.title = 'Tổng 2 Số';
    const {userId} = req.session;

    
    res.render('sum', {number1, number2, result});

});

module.exports = routers;