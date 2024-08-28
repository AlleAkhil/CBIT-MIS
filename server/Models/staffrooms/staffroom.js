// models/Block.js
const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  parameters: [{
    label: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }]
});

const Staffroom = mongoose.model('Staffroom', blockSchema);

module.exports = Staffroom;
