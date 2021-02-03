const { Router } = require('express');
const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const {asyncHandler, userLogin, userLogout} = require('./utils')
const bcrypt = require('bcryptjs');
const { User } = require('../db/models');

router.get('/', (req, res) => {
    res.render('login.pug', {
        title: 'Login',
        //CSRFTOKEN?
    })
})

const loginValidator = [
    check('email')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a value for Email Address.')
        .isEmail()
        .withMessage('Email Address is not a valid Email.'),
    check('password')
        .exists({ checkFalsy: true})
        .withMessage('Please provide a value for Password.')


]


router.post('/', loginValidator, asyncHandler(async(req, res, next) => {
    const { email, password } = req.body;

    let errors = []
    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()) {
        const user = await User.findOne({ where: { email }});

        if (user !== null) {
            const matchPassword = await bcrypt.compare(password, user.hashedPassword.toString());

            if(matchPassword) {
                userLogin(req, res, user)
                return req.session.save(() => {
                    res.redirect('/');
                })
            }

        }
        errors.push('Username/Password in invalid.');
    } else {
        errors = validatorErrors.array().map((error) => error.msg);
    }

    res.render('login', {
        title: 'Login',
        email,
        errors,
        //- CSRF TOKEN?
    })

}))


router.post('/logout', (req, res)=> {
    userLogout(req, res);
    return req.session.save(() => {
        res.redirect('/');
    })
})




module.exports = router;
