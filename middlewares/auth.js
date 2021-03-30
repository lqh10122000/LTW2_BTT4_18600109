const User = require('../models/users');

module.exports = function auth(req, res, next)
{
    console.log(req.session.userId);
    const {userId} = req.session;
    if(userId){
        const user = User.findById(userId);
        if(user)
        {
            console.log(user);
            res.locals.currentUser = user;
        }
    }
    next(); 

};