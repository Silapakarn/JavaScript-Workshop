exports.createPostValidator = (req, res, next) => {
    req.check('title', 'Write a title').notEmpty();
    req.check('title', 'Title must be a between 4 to 150').isLength({
        min: 4,
        max: 150
    })


    req.check('body', 'Write a body').notEmpty();
    req.check('body', 'Body must be a between 4 to 2000').isLength({
        min: 4,
        max: 2000
    })

    //check for error
    const errors = req.validationErrors();
    if(errors) {
        const firstError = errors.map((error) => error.message)[0]
        return res.status(400).json({error: firstError})
    }

    next();
}
