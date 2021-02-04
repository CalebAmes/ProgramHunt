const express = require('express');
const router = express.Router();
const asyncHandler = require('./utils')

// /* GET users listing. */
// router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
//   const programId = parseInt(req.params.id, 10);
//   const program = await Program.findByPk(programId);
//   res.render('program-main', { title: 'Program', program });
// }));


module.exports = router;
