var express = require('express');
var router = express.Router();

var sports =[
  {name:"football"},
  {name:"basketball"},
  {name:"handball"},
  {name:"tenis"},
];
var players =[
{name:"Nadal"}


]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcom To Wivaplay");
});
/* GET home page. */
router.get('/sports', function(req, res, next) {
  res.send(sports);
});
router.get('/players', function(req,res, next ) {
  res.send(players);

});

module.exports = router;
