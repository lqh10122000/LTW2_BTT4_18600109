const express = require('express');
const nodemailer = require('nodemailer');

// const nodemailer = require('../middlewares/mailer');
const regRouter = express.Router();





const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: 'ltweb222021@gmail.com',
    pass: 'ABCxyz123~'
  }
});




regRouter.get('/', function(req, res)
{
  res.locals.title = 'Đăng Ký';
  res.render('register');
});


regRouter.post('/', function(req, res)
{

  const {Email, Password} = req.body; 

  console.log(Email);
  
  if(Email)
  {
      transporter.sendMail({
      from: 'ltweb222021@gmail.com',
      to: `${Email}`,
      subject: "Hello",
      text: "Hello Wellcome",
      html: "<b>Hello Wellcome to my page</b> </br> <h4>Sign Up Success<h4>"
    }).then(console.log).catch(console.error);
  }
  
  res.redirect('/auth/login');

});

module.exports = regRouter;