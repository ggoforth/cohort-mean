'use strict';

var mongoose = require('mongoose');
var ProjectSchema = new mongoose.Schema({
  title: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
});

mongoose.model('Project', ProjectSchema);