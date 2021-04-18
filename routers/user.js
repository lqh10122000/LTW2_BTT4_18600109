const { promisify } = require('util');
const asyncHandler = require('express-async-handler');
const express = require('express');
const multer  = require('multer');
const  User = require('../models/users');
const rename = promisify(require('fs').rename);
const upload = multer({ storage: multer.memoryStorage() });
// const email = require('../servies/email');
const router = express.Router();


router.get('/profile', function(req, res, next) {
    res.locals.title = 'Profile';
    res.render('./user/profile');
});

router.post('/profile', upload.single('picture'), asyncHandler( async function(req, res, next)
{
    // await rename(req.file.path, `./public/profiles/1.jpg`);
    const user = null;
    console.log(user);
    user.picture = req.file.buffer;
    await user.save();
    return next(res.redirect('/user/profile'));
    res.end();
}));


router.get('/picture/:id', asyncHandler( async function(req, res, next)
{
    const user = await User.findById(req.params.id);
    if(!user || !user.picture) 
    {
        res.status(404).send('File not found');
    }
    else
    {
        res.header('Content-Type', 'image/jpeg').send(user.picture);
    }
}));

module.exports = router; 