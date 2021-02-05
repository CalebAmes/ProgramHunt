const express = require('express');
const router = express.Router();
const { User, Program } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils')
const { check, validationResult } = require('express-validator');
const { route } = require('.');


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = req.params.id
    const user = await User.findByPk(userId, {})
    res.render('profile', {
        username: user.username
            // img: user.img
    })

}))



// router.get('/'), asyncHandler(async(req, res) => {
//     const userId = req.params.id
//     const user = await User.findByPk(userId, {})
//     console.log(user)
//     res.render('profile', {
//         username: user.username
//     })

// })








module.exports = router;