const Audio = require('../model/Audio');
const Room = require('../model/Room');
const transcribeService = require('../services/transcribe');

module.exports = {
  async index(req, res) {
    const audios = await Audio.find({});
    return res.json(audios);
  },
  async store(req, res) {
    const { originalname, key, location: url = '' } = req.file;
    const { name, vocabulary, room: room_id } = req.body;
    const { user } = req.headers;
    console.log('File uploaded!');

    const room = await Room.findById(room_id);
    if(!room) return res.json({ message: 'Sala invalida' })

    const audio = await Audio.create({
      name,
      key,
      url,
      user,
      done: false,
      vocabulary,
      created_at: Date.now()
    });
    
    room.audios.push(audio._id);
    room.save()

    return res.json(audio);
    
  }
};