const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { sequelize } = require('./db/models');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const registerRouter = require('./routes/register')
const loginRouter = require('./routes/login')
const programRouter = require('./routes/program')
const profileRouter = require('./routes/profile')
const contactsRouter = require('./routes/contacts')
const { environment, sessionSecret } = require('./config');
const { authUser } = require('./routes/utils');
// const moment = require('moment');

const app = express();

// view engine setup
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(sessionSecret));
app.use(express.static(path.join(__dirname, 'public')));
app.locals.moment = require('moment');
// set up session middleware
const store = new SequelizeStore({ db: sequelize });

app.use(
    session({
        name: 'Program-Hunt.sid',
        secret: sessionSecret,
        store,
        saveUninitialized: false,
        resave: false,
    })
);

// create Session table if it doesn't already exist
store.sync();
app.use(authUser);
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/profile', profileRouter);
app.use('/users', usersRouter);
app.use('/program', programRouter);
app.use('/contacts', contactsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = { app };
