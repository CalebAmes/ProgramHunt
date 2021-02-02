const { Router } = require('express');
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const asyncHandler = require('./utils')

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


router.post('/',loginValidator, asyncHandler(async(req, res, next) => {

}))


module.exports = router;
