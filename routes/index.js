const express = require('express');
const router = express.Router();
const { User, Program } = require('../db/models');
const {asyncHandler, csrfProtection} = require('./utils')
const { check, validationResult } = require('express-validator')

/* GET home page. */
router.get('/', asyncHandler(async(req, res) => {
  const programs = await Program.findAll();
  res.render('index', { title: 'Program Hunt', programs});
}));

module.exports = router;
