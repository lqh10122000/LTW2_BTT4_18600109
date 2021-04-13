module.exports =function ensureLogged(req, res, next){
    if(!req.currentUser)
    {
        res.redirect('/auth/login');
    }
    else
    {
        next();
    }
};