const express = require('express');
const router = express.Router();
const { User, Program } = require('../db/models');
const {asyncHandler, csrfProtection} = require('./utils')
const { check, validationResult } = require('express-validator')

postValidators = [
    check('name')
        .exists({ checkFalsy: true})
        .withMessage('Please give the program a name.')
        .isLength({ max: 50 })
        .withMessage('Program name is to long.')
        .custom((value) => {
            return Program.findOne({ where: { name: value } })
            .then((program) => {
                if (program) {
                  return Promise.reject('Program name has already been used.');
                }
              });
        }),
    check('description')
        .exists({ checkFalsy: true})
        .withMessage('Please give the program a description.')

]

router.get('/post', csrfProtection, (req, res) => {
    const program = Program.build();
    res.render('program-post', {
        title: 'Post a Program',
        program,
        csrfToken: req.csrfToken(),
    })
} )

router.post('/post', csrfProtection, postValidators, asyncHandler(async(req, res) => {
    const userId = req.session.auth.userId
    const {name, description, video, image} = req.body

    const post = Program.build({
        name,
        description,
        userId,
        video,
        image
    })

    const validatorErrors = validationResult(req);

    if(validatorErrors.isEmpty()) {
        await post.save();
        res.redirect('/')
    } else {
        const errors = validatorErrors.array().map((error) => error.msg);
        res.render('program-post', {
            title: 'Post a Program',
            post,
            errors,
            csrfToken: req.csrfToken()
        })
    }

}))



module.exports = router;
