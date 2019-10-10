const { Schema, model } = require('mongoose');

const Audio = new Schema({
  name: String,
  key: String,
  url: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  // type: String,
  done: Boolean,
  transcription: Object,
  KeyPhrases: Array,
  created_at: Date
});

module.exports = model('Audio', Audio);
