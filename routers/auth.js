const asyncHandler = require('express-async-handler');
const express = require('express');
const routers = express.Router();
const User = require('../models/users');

routers.get('/login', function(req, res)
{
    
    res.locals.title = 'Login';

    res.render('auth/login');
});


routers.post('/login', asyncHandler( async function(req, res)
{

    const {email, password} = req.body; 
    
    const found = await User.findByEmail(email)
    {

        if(found && found.password === password)
        {
            console.log('found ' + found.Name);
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

    };
    
}));

module.exports = routers;