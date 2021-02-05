const express = require('express');
const router = express.Router();
const { User, Program } = require('../db/models');
const { asyncHandler, csrfProtection } = require('./utils')
const { check, validationResult } = require('express-validator');
const { route } = require('.');


router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    const user_Id = req.params.id
    const user = await User.findByPk(user_Id, {})
    const userPrograms = await Program.findAll({
        order: [['createdAt', 'DESC']],
        where:{
            userId: user_Id
        }
    })
    res.render('profile', {
        user,
        userPrograms
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