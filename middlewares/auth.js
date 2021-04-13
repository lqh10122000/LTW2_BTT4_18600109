const e = require('express');
const User = require('../models/users');

module.exports = function auth(req, res, next)
{
    res.locals.currentUser = null;

    const {userID} = req.session;

    console.log('nnnnnnnnn' + userID);

    if(req.session.currentUser)
    {
        const userId = req.session.currentUser;
        console.log('aaaaaaaaaaaaaaaaaaaaaa : ' + userId);

    
        if(userId){
    
            User.findById(userId.id).then(function(user){

                if(user)
                {
                    req.currentUser = user;
                    res.locals.currentUser = user;
                }

                next();


            }).catch(next);
    
           
        }
        next(); 
    }
    else
    {
        next(); 
    }
   

};