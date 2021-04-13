const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const session = require('express-session');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const authMiddleware =  require('./middlewares/auth');
const db = require('./models/db');
const loginRoter = require('./routers/login');
const authRouter = require('./routers/auth');
const sumRouter = require('./routers/sum');




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY || 'secrect'],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));


app.use(authMiddleware);



app.set('view engine', 'ejs');

app.use(expressLayouts);

app.use('/login', loginRoter);

app.use(expressLayouts);

app.use('/auth', authRouter);

app.use('/sum', sumRouter);


app.get('/', function(req, res) {

    res.locals.title = 'Đăng Nhập';
    res.render('auth/login');
});


app.get('/view', function (req, res)
{
    req.session.views = (req.session.views || 0) + 1;
    res.send(`Bạn Đã Xem Trang Này ${req.session.views}`);
});

db.sync().then(function(){
        
    const PORT = process.env.PORT || 5000;

    console.log('server is listening');
    
    app.listen(PORT);

}).catch(console.error);

