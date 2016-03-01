
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
function Albums() {
  return knex('albums');
}

router.post('/', function(req, res) {
  // insert into Albums (artist, name, genre, stars, explicit)
  // values (req.body.artist...req.body.explicit)
  Albums().insert({
    artist: req.body.artist,
    name: req.body.name,
    genre: req.body.genre,
    stars: req.body.stars,
    explicit: req.body.explicit
  }, 'id').then(function(result) {
    res.json(result);
  });
});

router.get('/', function(req, res) {
  // 'select * from albums'
  Albums().select().then(function(result) {
    res.json(result);
  });
});

router.get('/:id', function(req, res) {
  // 'select * from albums where id = '+id
  Albums().where('id', req.params.id).first().then(function(result) {
    res.json(result);
  });
});

router.put('/:id', function(req, res) {
  // 'update albums set stars = '+req.body.stars' where id = '+id;
  Albums().where('id', req.params.id).update({
    stars: req.body.stars
  }).then(function(result) {
    res.json(result);
  });
});

router.delete('/:id', function(req, res) {
  // 'delete from albums where id = '+id
  Albums().where('id', req.params.id).del().then(function(result) {
    res.json(result);
  });
});
