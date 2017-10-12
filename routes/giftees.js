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
  console.log('entered in post add', req.body)
  knex('giftees').insert({creator_id: req.body.creator_id, first_name: req.body.first_name, last_name: req.body.last_name, relationship: req.body.relationship, budget: req.body.budget, email: req.body.email, age: req.body.age, birthday: req.body.birthday, birthdate: req.body.birthdate, xmas: req.body.xmas, hanukka: req.body.hanukka, mothersday: req.body.mothersday, fathersday: req.body.fathersday, valentines: req.body.valentines, anniday: req.body.anniday, annidate: req.body.annidate}).returning("*").then(data => {
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
