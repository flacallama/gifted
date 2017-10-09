var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  knex.raw('SELECT * from gifts')
  .then(function(gifts){
    res.json(gifts)
  })
})

router.post('/', function(req, res, next) {
  knex.raw('INSERT INTO gifts ("creator_id", "giftee_id", "idea") VALUES ()')
})




module.exports = router;
