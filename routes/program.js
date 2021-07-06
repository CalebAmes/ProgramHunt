const express = require('express');
const router = express.Router();
const { User, Program, Comment } = require('../db/models');
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
    const {name, bio, thumbnail, description, video, image} = req.body

    const post = await Program.build({
        name,
        bio,
        thumbnail,
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
    if(!req.session.auth) res.redirect('/login')
    const programId = parseInt(req.params.id, 10);
    const program = await Program.findByPk(programId);
    const comments = await Comment.findAll({
        order: [['createdAt', 'DESC']],
        where: {
            "programId" : programId
        }
    })
    const commentsArr = []
    for(const comment in comments){
        commentsArr.push(comments[comment].comment)
    }
    program["comments"] = commentsArr
    res.render('program-main', { title: 'Program', program, signedInId });
}));

router.get('/:id(\\d+/delete)', asyncHandler(async(req, res) => {
    const programId = parseInt(req.params.id, 10);
    const program = await Program.findByPk(programId);
    await program.destroy();
    res.redirect('/')
}));

router.post('/:id(\\d+)', asyncHandler(async(req, res) => {
    const userId = req.session.auth.userId
    const programId = parseInt(req.params.id, 10)
    const {comment} = req.body
    const newComment = Comment.build({
        userId,
        programId,
        comment
    })
    newComment.save()
    const program = await Program.findByPk(programId);
    const comments = await Comment.findAll({
        order: [['createdAt', 'DESC']],
        where: {
            "programId" : programId
        }
    })
    const commentsArr = []
    for(const comment in comments){
        commentsArr.push(comments[comment].comment)
    }
    program["comments"] = commentsArr
    res.render('program-main', { title: 'Program', program });
}))


module.exports = router;
