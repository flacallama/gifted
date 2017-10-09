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




module.exports = router;
