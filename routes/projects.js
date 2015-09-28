var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Project = mongoose.model('Project');

router.param('projectId', function (req, res, next, projectId) {
  Project.findById(projectId).populate('user').exec(function (err, project) {
    if (err) return res.sendStatus(404);
    req.project = project;
    next();
  });
});

/* GET users listing. */
router.route('/')
  .get(function (req, res) {
    Project.find().populate('user').exec(function (err, projects) {
      res.json(projects);
    });
  })
  .post(function (req, res) {
    var project = new Project(req.body);
    project.save(function (err) {
      project.populate('user', function (err, project) {
        if (err) return res.status(400).json(err);
        res.json(project);
      });
    });
  });

/**
 * Update a project.
 */
router.route('/:projectId')
  .put(function (req, res) {
    req.project.update({$set: req.body}, {new: true}, function (err, project) {
      res.sendStatus(200);
    });
  })
  .get(function (req, res) {
    res.json(req.project);
  })
  .delete(function (req, res) {
    req.project.remove(function (err) {
      if (err) return res.status(400).json(err);
      res.sendStatus(200);
    })
  });

module.exports = router;