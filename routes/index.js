const express = require('express');
const router = express.Router();
const { User, Program } = require('../db/models');
const {asyncHandler, csrfProtection} = require('./utils')
const { check, validationResult } = require('express-validator')

/* GET home page. */
router.get('/', asyncHandler(async(req, res) => {
  // const programId = parseInt(req.params.id, 10);
  const programs = await Program.findAll();
  console.log(programs)
  res.render('index', { title: 'Program Hunt', programs});
  // res.render('index')
}));

module.exports = router;
