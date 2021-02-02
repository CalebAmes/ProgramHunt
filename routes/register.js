const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();
const { users } = require('../db/models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')


const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

const registrationValidator = [
  check('username')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a Username.')
    .isLength({ max: 25 })
    .withMessage('Username limit is 25 characters.')
    .custom((value) => {
      return users.findOne({ where: { username: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Username is already in use by another account.');
          }
        });
    }),
  check('email')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a value for Email.')
    .isLength({ max: 50})
    .withMessage('Email can not be longer than 50 characters.')
    .isEmail()
    .withMessage('Email Address is not a valid Email.')
    .custom((value) => {
      return users.findOne({ where: { email: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account.');
          }
        });
    }),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provde a value for Password.')
    .isLength({ max: 50 })
    .withMessage( 'Password can not be over 50 characters long.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, 'g')
    .withMessage('Password must contain at least 1 lowercase letter, uppercase letter, number, and special character. (i.e. "!@#$%^&*")'),
  check('confirmPassword')
    .exists({ checkFalsy: true })
    .withMessage('Please Confirm you password.')
    .isLength({ max: 50 })
    .withMessage('Password can not be more than 50 characters.')
    .custom((value, {req}) => {
      if(value !== req.body.password){
        throw new Error(' Confirm Password does not match Password.');
      }
      return true;
    })

]

router.get('/', function(req, res, next) {
  res.render('register.pug')
});

router.post('/', registrationValidator, asyncHandler(async(req, res, next) => {
  const { username, email, password } = req.body;

  const validatorErrors = validationResult(req)

  if(validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 8);
    await users.create({ username, email, hashedPassword })
    //TODO: Log-in the User
    res.redirect('/')
  } else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('register.pug', {
      title: 'Registration',
      // user,
      errors,
      //CSRFTOKEN?
    });
  };

}));



module.exports = router;
