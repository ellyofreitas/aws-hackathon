const { Schema, model } = require('mongoose');

const Room = new Schema({
  name: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  audios: [{ type: Schema.Types.ObjectId, ref: 'Audio' }],
  created_at: Date
});

module.exports = model('Room', Room);
