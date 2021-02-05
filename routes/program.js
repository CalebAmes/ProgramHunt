const express = require('express');
const router = express.Router();
const { User, Program } = require('../db/models');
const {asyncHandler, csrfProtection} = require('./utils')
const { check, validationResult } = require('express-validator')

const postValidators = [
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

router.get('/', csrfProtection, asyncHandler(async(req, res) => {
    console.log(req.session.auth)
    if(req.session.auth){
    const program = Program.build();
     res.render('program-post', {
        title: 'Post a Program',
        program,
        csrfToken: req.csrfToken(),
    })
    } else {
        const errors = [
            'Please log in to create a post.'
        ];
        res.render('login', {
            title: 'login',
            errors,
            csrfToken: req.csrfToken(),
        });
    }
}));

router.post('/', csrfProtection, postValidators, asyncHandler(async(req, res) => {
    const userId = req.session.auth.userId
    const {name, description, video, image} = req.body

    const post = await Program.build({
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

}));

router.get('/:id(\\d+)', asyncHandler(async(req, res) => {
    let signedInId = 0;
    if(req.session.auth) signedInId = req.session.auth.userId;
    const programId = parseInt(req.params.id, 10);
    const program = await Program.findByPk(programId);
    res.render('program-main', { title: 'Program', program, signedInId });
}));

router.post('/:id(\\d+/delete)', asyncHandler(async(req, res) => {
    const programId = parseInt(req.params.id, 10);
    const program = await Program.findByPk(programId);
    await program.destroy();
    res.redirect('/')
}));

module.exports = router;
