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
  console.log('entered in post', req.body)
  knex('gifts').insert({creator_id: req.body.creator_id, giftee_id: req.body.giftee_id, idea: req.body.idea, idea_notes: req.body.idea_notes, is_past: null, date_given: null}).returning("*").then(data => {
    knex('gifts').select().then(gifts=> res.send(gifts))
  })
})

router.post('/:id/delete', function(req, res, next) {
  console.log("entered into delete post", req.body)
  knex('gifts').where('id', req.params.id).del().returning("*").then(data => {
    knex('gifts').select().then(gifts=> res.send(gifts))
  })
})


  // router.post('/:id/delete', (req, res, next) => {
  //   knex('comments').where('id', req.params.id).del().then(() => {
  //     res.json('Deleted ' + req.params.id)
  //   })
  // })

// router.post('/:id/reply', (req, res, next) => {
//   knex('comments').insert({content: req.body.content, comment_id: req.params.id, post_id: null}).returning('*').then(data => {
//     res.json(data.rows)
//   })
// })



module.exports = router;
