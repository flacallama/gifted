var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from giftees')
  .then(function(giftees){
    res.json(giftees)
  })
})

router.post('/', function(req, res, next) {
  console.log('entered in giftee post add', req.body)
  knex('giftees').insert({
    creator_id: req.body.creator_id,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    relationship: req.body.relationship,
    email: req.body.email,
    age: req.body.age

    }).returning("*").then(data => {
    knex('giftees').select().then(giftees=> res.send(giftees))
  })
})

router.post('/:id/delete', function(req, res, next) {
  console.log("entered into delete giftee post", req.body)
  knex('giftees').where('id', req.params.id).del().returning("*").then(data => {
    knex('giftees').select().then(giftees=> res.send(giftees))
  })
})




module.exports = router;
