const cookieParser = require('cookie-parser');
const express = require('express');
const router = express.Router();
const { users } = require('../db/models');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const asyncHandler = handler => (req, res, next) => handler(req, res, next).catch(next);

const registationValidator = [
  check('email')
    .exist({checkFalsey: true})
    .isEmail()
    .withMessage = "Please provide a valid email address"
    .custom((value) => {
      return db.User.findOne({ where: { emailAddress: value } })
        .then((user) => {
          if (user) {
            return Promise.reject('The provided Email Address is already in use by another account');
          }
        });
    }),
  check('username')
    .exist({checkFalsey: true})
    .isLength({max: 25})
    .withMessage = "This username is already in use",
  check('password')
    .exist({checkFalsey: true})
    .withMessage = "Please provide a password",
  check('confirmPassword')
    .exist({checkFalsey: true})
    .withMessage = "Please confirm your password"
]

router.get('/', function(req, res, next) {
  res.render('register.pug')
});

router.post('/', registrationValidator, asyncHandler(async(req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  if(password !== confirmPassword) next();

  const hashedPassword = await bcrypt.hash(password, 8);
  const user = await users.create({ username, email, hashedPassword })
  res.redirect('/')
}))



module.exports = router;