const asyncHandler = require('express-async-handler');
const express = require('express');
const routers = express.Router();
const User = require('../models/users');

routers.get('/login', function(req, res)
{
    
    res.locals.title = 'Login';

    res.render('auth/login');
});


routers.post('/login', asyncHandler( async function(req, res, next)
{

    const {email, password} = req.body; 
    
    const found = await User.findByEmail(email);
    

    if(found && found.password === password)
    {
        console.log('found ' + found.Name);
        req.session.currentUser = found;
        res.locals.currentUser = found.id;
        res.locals.title = 'Tổng 2 Số';
        res.locals.result = 0;


        // return res.redirect('/sum');

        // return next(res.redirect('/sum'));
        
        // return;

        // const render = res.render;

        // res.render = function renderWrapper(abc)
        // {
        //    Error.captureStackTrace(this);
        //    return render.apply(this, abc);
        // };


       res.send('abc');
        
    


        // res.setHeader('Content-Type', 'text/plain');

        
    }
    else
    {
        res.locals.title = "ERRO";
        res.render('auth/login');
        return next();
    }

    
    
}));

module.exports = routers;