const router = require('express').Router();
const Team = require('../models/Team');
// const mongo = require('mongodb');

module.exports = router
    .post('/', (req, res, next) => {
        Team.create(req.body)
            .then(team => res.json(team))
            .catch(next);
    })

    .get('/', (req, res, next) => {
        Team.find(req.query)
            .lean()
            .then(teams => res.json(teams))
            .catch(next);
    });