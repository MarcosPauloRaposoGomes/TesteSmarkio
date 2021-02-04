//Get All Comments
exports.findAll = (req, res, next) => {
    Comment.findAll({
            include: [{
               content: db.content
            }],
            order: [
                ["createdAt", "DESC"]
            ]
        })
        .then(AllComments => res.status(200).send(AllComments))
        .catch(err =>
            res.status(500).send({
                error: err
            })
        );
};

//Comment Create
exports.createComment = (req, res) => {
    Comment.create({
        content: req.body.content
        })
        .then(()=> res.status(200))
        .catch(err =>
            res.status(500).send({
                error: err
            })
        );
};