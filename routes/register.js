const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();
const { users } = require('../db/models');
const bcrypt = require('bcryptjs');
const check = require('express-validator/check')
// const validationResult = require('express-validator/validationResult')
const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

const registrationValidator = [
  // .custom((email) => {
    //   return db.users.findOne({ where: { emailAddress: email } })
    //     .then((users) => {
      //       if (users) {
        //         return Promise.reject('The provided Email Address is already in use by another account');
        //       }
        //     });
        // }),
  check('username')
    .exists({checkFalsey: true})
    .isLength({max: 25})
    .withMessage = "This username is already in use",
  check('email')
    .exists({checkFalsey: true})
    .isEmail()
    .withMessage = "Please provide a valid email address",
  check('password')
    .exists({checkFalsey: true})
    .withMessage = "Please provide a password",
  check('confirmPassword')
    .exists({checkFalsey: true})
    .withMessage = "Please confirm your password"
]

router.get('/', function(req, res, next) {
  res.render('register.pug')
});

router.post('/', registrationValidator, asyncHandler(async(req, res, next) => {
  const { username, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 8);
  const user = await users.create({ username, email, hashedPassword })
  const validatorErrors = validationResult(req)
  res.redirect('/')
}))



module.exports = router;