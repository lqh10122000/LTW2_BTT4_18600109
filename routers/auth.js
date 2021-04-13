const express = require('express');
const routers = express.Router();
const User = require('../models/users');

routers.get('/login', function(req, res)
{
    
    res.locals.title = 'Login';

    res.render('auth/login');
});




routers.post('/login', function(req, res, next)
{

    const {email, password} = req.body; 
    
    User.findByEmail(email).then(function (found) 
    {
        console.log('/login ' + found);

        if(found && found.password === password)
        {
            req.session.currentUser = found;
            res.locals.currentUser = found.id;
            res.locals.title = 'Tổng 2 Số';
            res.locals.result = 0;
            res.redirect('/sum');
        }
        else
        {
            res.locals.title = "ERRO";
            res.render('auth/login');
        
        }

    }).catch(next);
    
});

module.exports = routers;