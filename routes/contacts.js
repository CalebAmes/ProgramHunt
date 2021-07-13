const express = require('express');
const router = express.Router();
const {asyncHandler, csrfProtection} = require('./utils')

router.get('/', csrfProtection, asyncHandler(async(req, res) => {
  res.render('contacts.pug', {
    title: 'Contacts',
    csrfToken: req.csrfToken(),
  })
}));

module.exports = router;
