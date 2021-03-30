const express = require('express');
const routers = express.Router();
const User = require('../models/users');


routers.get('/login', function(req, res)
{
    console.log('testing dang nhap');
    res.locals.title = 'Login';
    res.render('auth/login');
});



// routers.get('/logout', function(req, res)
// {
//     res.locals.title = 'Logout';

//     res.redirect('/auth/login');
//     // res.render('auth/login');
// });




routers.post('/login', function(req, res)
{

    console.log(req.body);
    const {email, password} = req.body; 
    const found = User.findByEmail(email);
    console.log(email);
    console.log(password);

    if(found && found.password === password)
    {
        req.session.currentUser = found.id;

        res.locals.title = 'Tổng 2 Số';
        res.locals.result = 0;
        res.redirect('/sum');

    }
    else
    {
        res.locals.title = "ERRO";
        res.render('auth/login');
       
    }
});

module.exports = routers;