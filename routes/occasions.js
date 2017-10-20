var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from occasions join giftees on giftees.id = occasions.giftee_id')
  .then(function(occasions){
    res.json(occasions)
  })
})

router.post('/', function(req, res, next) {
  console.log('entered in occasions post add', req.body)
  knex('occasions').insert({
    giftee_id: req.body.giftee_id,
    birthday: req.body.birthday,
    birthdate: req.body.birthdate,
    birthday_price: req.body.birthday_price,
    xmas: req.body.xmas,
    xmas_price: req.body.xmas_price,
    hanukka: req.body.hanukka,
    hanukka_price: req.body.hanukka_price,
    mothersday: req.body.mothersday,
    mothersday_price: req.body.mothersday_price,
    fathersday: req.body.fathersday,
    fathersday_price: req.body.fathersday_price,
    valentines: req.body.valentines,
    valentines_price: req.body.valentines_price,
    anniday: req.body.anniday,
    annidate: req.body.annidate,
    anniday_price: req.body.anniday_price
    }).returning("*").then(data => {
    knex('occasions').select().then(occasions=> res.send(occasions))
  })
})

router.post('/:id/delete', function(req, res, next) {
  console.log("entered into delete giftee post", req.body)
  knex('occasions').where('id', req.params.id).del().returning("*").then(data => {
    knex('occasions').select().then(occasions=> res.send(occasions))
  })
})




module.exports = router;
