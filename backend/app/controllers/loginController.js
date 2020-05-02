const db = require("../models");

exports.loginWithGoogle = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    db.google_account.findByPk(req.body.id, {
        include: [
            {
                model: db.user,
            }
        ],
    }).then((account) => {
        res.send(account)
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while getting the google account."
        });
    });
};

exports.addGoogleAccount = (req, res) => {
    const googleAccount = req.body.user;
    db.user.create({
        username: googleAccount.name
    }).then((user) => {
        db.google_account.create({
            google_id: googleAccount.id,
            userId: user.id
        }).then(() => {
            res.send(true)
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "error occurred while creating the google account."
            });
        });
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while creating the user account."
        });
    });
}

exports.loginWithTwitter = (req, res) => {
    // Validate request
    if (!req.body.id) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    db.twitter_account.findByPk(req.body.id, {
        include: [
            {
                model: db.user,
            }
        ],
    }).then((account) => {
        res.send(account)
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while getting the google account."
        });
    });
};

exports.addTwitterAccount = (req, res) => {
    const twitterAccount = req.body.user;
    db.user.create({
        username: twitterAccount.name
    }).then((user) => {
        db.twitter_account.create({
            twitter_id: twitterAccount.id,
            userId: user.id
        }).then(() => {
            res.send(true)
        }).catch((err) => {
            res.status(500).send({
                message:
                    err.message || "error occurred while creating the google account."
            });
        });
    }).catch((err) => {
        res.status(500).send({
            message:
                err.message || "error occurred while creating the user account."
        });
    });
}