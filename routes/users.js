var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

router.param('userId', function (req, res, next, userId) {
  User.findById(userId, function (err, user) {
    if (err) return res.sendStatus(404);
    req.user = user;
    next();
  });
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  User.find(function (err, users) {
    console.log(users);
    res.render('users', {title: 'User', users: users});
  });
});

router.post('/', function (req, res) {
  var user = new User(req.body);
  user.save(function (err) {
    res.json(user);
  });
});

router.put('/:userId', function (req, res) {
  req.user.update({$set: req.body}, {new: true}, function (err, user) {
    res.sendStatus(200);
  });
});

module.exports = router;
